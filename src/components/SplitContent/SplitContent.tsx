import React, { FC, ReactNode } from 'react';

interface ISplitContentBlock {
  content?: ReactNode;
  useContainer?: boolean;
}

interface ISplitContent {
  left: ISplitContentBlock;
  right: ISplitContentBlock;
}

const SplitContent: FC<ISplitContent> = ({ left, right }) => (
  <section>
    <div>{left.content}</div>
    <div>{right.content}</div>
  </section>
);

export default SplitContent;