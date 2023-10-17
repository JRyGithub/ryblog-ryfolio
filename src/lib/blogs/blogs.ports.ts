import { JSXElementConstructor, ReactElement } from 'react';

export type Meta = {
  id: string;
  title: string;
  date: string; //Current typo in blogs
  tags: string[];
  image: string;
};

export type FileTree = {
  tree: [
    {
      path: string;
      size: number;
      url: string;
      type: string;
      sha: string;
    },
  ];
};

export type Blog = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>; //TODO
};
