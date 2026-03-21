import React from "react";

const TaskStatusTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="my-2">
      <div className="flex">
        {tabs.map((tab) => {
          const tabValue = tab.value || tab.label;
          const isActive = activeTab === tabValue;

          return (
            <button
              key={tabValue}
              className={`relative px-3 md:px-4 py-2 text-sm font-medium ${
                isActive ? "text-primary" : "text-gray-500 hover:text-gray-700"
              } cursor-pointer`}
              onClick={() => setActiveTab(tabValue)}
            >
              <div className="flex items-center">
                <span className="text-xs">{tab.label}</span>
                <span
                  className={`text-xs ml-2 px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-gray-200/2 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              </div>
              {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TaskStatusTabs;
