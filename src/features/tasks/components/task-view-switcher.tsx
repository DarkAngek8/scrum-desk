"use client";

import { SeparatorDot } from "@/components/separatorDot";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusIcon } from "lucide-react";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import { useGetTasks } from "../api/use-get-tasks";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export const TaskViewSwitcher = () => {
  const workspaceId = useWorkspaceId();
  const { data: tasks, isLoading: isLoadingTasks } = useGetTasks({
    workspaceId,
  });
  const { open } = useCreateTaskModal();

  return (
    <Tabs className="flex-1 w-full border rounded-lg">
      <div className="h-full flex flex-col overflow-auto p-4">
        <div className="flex flex-col gap-y-2 lg:flex-row justify-between items-center">
          <TabsList className="w-full lg:w-auto">
            <TabsTrigger className="h-8 w-full lg:w-auto" value="table">
              Table
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="kanban">
              Kanban
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="calendar">
              Calendar
            </TabsTrigger>
          </TabsList>
          <Button onClick={open} size="sm" className="w-full lg:w-auto">
            <PlusIcon className="size-4 mr-2" />
            New
          </Button>
        </div>
        <SeparatorDot className="my-4" />
        Data filters
        <SeparatorDot className="my-4" />
        <>
          <TabsContent value="table" className="mt-0">
            <DataTable columns={columns} data={tasks?.documents ?? []} />
          </TabsContent>
          <TabsContent value="kanban" className="mt-0">
            Data kanban
          </TabsContent>
          <TabsContent value="calendar" className="mt-0">
            Data calendar
          </TabsContent>
        </>
      </div>
    </Tabs>
  );
};
