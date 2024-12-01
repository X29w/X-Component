import type { FC, ReactNode } from 'react';

interface DetectEmptyProps {
  /** 内容 */
  children: ReactNode;

  /** 是否为空 */
  emptyCondition: boolean;

  /** 为空时渲染 */
  emptyRender: ReactNode;
}

const DetectEmpty: FC<DetectEmptyProps> = ({
  children,
  emptyCondition = true,
  emptyRender,
}) => (emptyCondition ? emptyRender : children);

export default DetectEmpty;
