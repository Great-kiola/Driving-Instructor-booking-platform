import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import moment from "moment"
import AvatarGroup from 

const ViewTaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  const getStatusTagColor = (status) => {
    switch (status) {
      case "in-Progress":
        return "text-cyan-500 bg-cyan-50 border border-cyan-500/10";
      case "completed":
        return "text-lime-500 bg-lime-50 border border-lime-500/20";
      default:
        return "text-violet-500 bg-violet-50 border border-violet-500/10";
    }
  };

  // Handle todo check
  const updateTodoChecklist = async (index) => {};

  // Handle attachment link Click
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    // Get task info by ID
    const getTaskDetailsByID = async () => {
      try {
        const response = await axiosInstance.get(
          API_PATHS.TASKS.GET_TASK_BY_ID(id),
        );

        if (response.data) {
          const taskInfo = response.data;
          setTask(taskInfo);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    if (id) {
      getTaskDetailsByID();
    }

    return () => {};
  }, [id]);

  return (
    <DashboardLayout activeMenu="My Tasks">
      <div className="mt-5">
        {task && (
          <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
            <div className="form-card col-span-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm md:text-xl font-medium">
                  {task?.title}
                </h2>

                <div
                  className={`text-[11px] md:text-[13px] font-medium ${getStatusTagColor(task?.status)} px-4 py-0.5 rounded`}
                >
                  {task?.status}
                </div>
              </div>

              <div className="mt-4">
                <InfoBox label="Description" value={task?.description} />
              </div>

              <div className="mt-4">
                <InfoBox label="Priority" value={task?.priority} />
              </div>

              <div className="mt-4">
                <InfoBox label="Due Date" value={task?.dueDate ? moment(task?.dueDate).format("Do MMM YYY")
                  : "N/A"
                }
              />
              </div>

              <div className="">
                <label className="">
                  Assigned To
                </label>

                <AvatarGroup
                  avatars={task?.assignedTo?.map((item) => item?.profileImageUrl) || []}
                  maxVisible={5}
                />
              </div>



            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ViewTaskDetails;

const InfoBox = ({ label, value }) => {
  return (
    <>
      <label className="text-xs font-medium text-slate-500">{label}</label>

      <p className="text-[13px] md:text-[13px] font-medium text-gray-700 mt-0.5">
        {value}
      </p>
    </>
  );
};
