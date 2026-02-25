import React from "react";

const TaskCard = (
  title,
  description,
  priority,
  status,
  progress,
  createdAt,
  dueDate,
  assignedTo,
  attachmentCount,
  completedTodoCount,
  todoChecklist,
  onClick,
) => {


    const getStatusTagColor = () => {
        switch (status) {
            case "In Progress":
                return "text-cyan-500 bg-cyan-50 border border-cyan-500/10";

            case "Completed":
                return "text-lime-500 bg-lime-50 border border-lime-500/20";
                
            case "Pending":
                return "text-violet-500 bg-violet-50 border border-violet-500/20";
        }
    };

    const getPriorityTagColor = () => {
        switch (priority) {
            case "medium":
                return "text-yellow-500 bg-yellow-50 border border-yellow-500/20";
                
            case "low":
                return "text-green-500 bg-green-50 border border-green-500/20";
            
            default:
                return "text-rose-500 bg-rose-50 border border-rose-500/10";
        } 
    }


  return <div>TaskCard</div>;
};

export default TaskCard;
