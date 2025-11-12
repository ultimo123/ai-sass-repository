"use client";

import { Position, type NodeProps } from "@xyflow/react";
import type { LucideIcon } from "lucide-react";
import { memo, type ReactNode } from "react";
import { BaseNode, BaseNodeContent } from "@/components/react-flow/base-node";
import { WorkflowNode } from "@/components/workflow-node";
import { BaseHandle } from "@/components/react-flow/base-handle";
import Image from "next/image";

interface BaseTriggerProps extends NodeProps {
  children?: ReactNode;
  icon: LucideIcon | string;
  name: string;
  description?: string;
  // status: NodeStatus;
  onSettings?: () => void;
  onDoubleClick?: () => void;
}

export const BaseTrigger = memo(
  ({
    id,
    children,
    icon: Icon,
    name,
    description,
    onSettings,
    onDoubleClick,
  }: BaseTriggerProps) => {
    // TODO:Add delete
    const handleDelete = () => {};

    return (
      <WorkflowNode
        name={name}
        description={description}
        onSettings={onSettings}
        onDelete={handleDelete}
      >
        <BaseNode
          onDoubleClick={onDoubleClick}
          className="rounded-l-2xl relative group"
        >
          <BaseNodeContent>
            {typeof Icon === "string" ? (
              <Image
                src={Icon}
                alt={name}
                width={16}
                height={16}
              />
            ) : (
              <Icon className="size-4 text-muted-foreground" />
            )}
            {children}
            <BaseHandle
              id="source-1"
              type="source"
              position={Position.Right}
            />
          </BaseNodeContent>
        </BaseNode>
      </WorkflowNode>
    );
  }
);

BaseTrigger.displayName = "BaseTrigger";
