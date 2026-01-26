'use client';

import { cn } from '@/lib/utils/utils';
import { useEffect, useState } from 'react';

// TODO: Clean up

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  icon: string;
};

type Connection = {
  from: string;
  to: string;
};

type DiagramConfig = {
  nodes: Node[];
  connections: Connection[];
};

const diagrams: Record<string, DiagramConfig> = {
  'Simple Ticketing': {
    nodes: [
      { id: 'client', label: 'Client', x: 50, y: 15, icon: '🖥️' },
      { id: 'gateway', label: 'API Gateway', x: 50, y: 40, icon: '🚪' },
      { id: 'auth', label: 'Auth', x: 20, y: 65, icon: '🔐' },
      { id: 'tickets', label: 'Tickets', x: 50, y: 62, icon: '🎫' },
      { id: 'orders', label: 'Orders', x: 80, y: 65, icon: '📦' },
      { id: 'nats', label: 'NATS', x: 50, y: 85, icon: '📡' },
    ],
    connections: [
      { from: 'client', to: 'gateway' },
      { from: 'gateway', to: 'auth' },
      { from: 'gateway', to: 'tickets' },
      { from: 'gateway', to: 'orders' },
      { from: 'auth', to: 'nats' },
      { from: 'tickets', to: 'nats' },
      { from: 'orders', to: 'nats' },
    ],
  },
  'Calculate Probabilities App': {
    nodes: [
      { id: 'react', label: 'React', x: 20, y: 30, icon: '⚛️' },
      { id: 'api', label: 'C# API', x: 50, y: 30, icon: '⚙️' },
      { id: 'docker', label: 'Docker', x: 80, y: 30, icon: '🐳' },
      { id: 'loki', label: 'Loki', x: 35, y: 70, icon: '📊' },
      { id: 'grafana', label: 'Grafana', x: 65, y: 70, icon: '📈' },
    ],
    connections: [
      { from: 'react', to: 'api' },
      { from: 'api', to: 'docker' },
      { from: 'api', to: 'loki' },
      { from: 'loki', to: 'grafana' },
    ],
  },
};

// Default diagram for projects without specific config
const defaultDiagram: DiagramConfig = {
  nodes: [
    { id: 'frontend', label: 'Frontend', x: 25, y: 50, icon: '🌐' },
    { id: 'backend', label: 'Backend', x: 50, y: 50, icon: '⚙️' },
    { id: 'db', label: 'Database', x: 75, y: 50, icon: '💾' },
  ],
  connections: [
    { from: 'frontend', to: 'backend' },
    { from: 'backend', to: 'db' },
  ],
};

type ArchitectureDiagramProps = {
  projectTitle: string;
  isInView: boolean;
};

const ArchitectureDiagram = ({
  projectTitle,
  isInView,
}: ArchitectureDiagramProps) => {
  const [activeConnections, setActiveConnections] = useState<Set<string>>(
    new Set(),
  );
  const [pulsingNode, setPulsingNode] = useState<string | null>(null);

  const config = diagrams[projectTitle] || defaultDiagram;

  useEffect(() => {
    if (!isInView) return;

    // Animate connections sequentially
    let connectionIndex = 0;
    const animateConnection = () => {
      if (connectionIndex < config.connections.length) {
        const conn = config.connections[connectionIndex];
        setActiveConnections((prev) => {
          const newSet = new Set(Array.from(prev));
          newSet.add(`${conn.from}-${conn.to}`);
          return newSet;
        });
        setPulsingNode(conn.to);
        connectionIndex++;
      } else {
        // Reset and loop
        connectionIndex = 0;
        setActiveConnections(new Set());
      }
    };

    const interval = setInterval(animateConnection, 800);
    return () => clearInterval(interval);
  }, [isInView, config.connections]);

  const getNodePosition = (id: string) => {
    const node = config.nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 };
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connections */}
        {config.connections.map((conn) => {
          const from = getNodePosition(conn.from);
          const to = getNodePosition(conn.to);
          const isActive = activeConnections.has(`${conn.from}-${conn.to}`);

          return (
            <g key={`${conn.from}-${conn.to}`}>
              {/* Glow effect */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="currentColor"
                strokeWidth={isActive ? 0.8 : 0.3}
                className={cn(
                  'text-primary transition-all duration-500',
                  isActive ? 'opacity-60' : 'opacity-20',
                )}
                strokeLinecap="round"
                filter={isActive ? 'url(#glow)' : undefined}
              />
              {/* Animated pulse along connection */}
              {isActive && (
                <circle r="1" className="fill-primary">
                  <animateMotion
                    dur="0.6s"
                    repeatCount="1"
                    path={`M${from.x},${from.y} L${to.x},${to.y}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Nodes */}
      {config.nodes.map((node) => (
        <div
          key={node.id}
          className={cn(
            'absolute flex flex-col items-center transition-all duration-300',
            pulsingNode === node.id && 'scale-110',
          )}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300',
              pulsingNode === node.id
                ? 'border-primary bg-primary/20 shadow-lg shadow-primary/30'
                : 'border-border/50 bg-background/80',
            )}
          >
            <span className="text-lg">{node.icon}</span>
          </div>
          <span
            className={cn(
              'mt-1 font-mono text-[10px] transition-colors duration-300',
              pulsingNode === node.id
                ? 'text-primary'
                : 'text-muted-foreground',
            )}
          >
            {node.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ArchitectureDiagram;
