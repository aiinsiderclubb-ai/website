"use client";

import { ReactNode } from "react";
import FlowBridge, { type FlowBridgeVariant } from "@landing/components/FlowBridge";

type FlowSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  bridgeTop?: FlowBridgeVariant | false;
  bridgeBottom?: FlowBridgeVariant | false;
  bridgeClassName?: string;
};

/**
 * Section wrapper with optional flow bridges above/below for visual continuity.
 */
export default function FlowSection({
  id,
  children,
  className = "",
  bridgeTop = false,
  bridgeBottom = false,
  bridgeClassName = "",
}: FlowSectionProps) {
  return (
    <>
      {bridgeTop && <FlowBridge variant={bridgeTop} className={bridgeClassName} />}
      <section id={id} className={`relative ${className}`}>
        {children}
      </section>
      {bridgeBottom && <FlowBridge variant={bridgeBottom} className={bridgeClassName} />}
    </>
  );
}
