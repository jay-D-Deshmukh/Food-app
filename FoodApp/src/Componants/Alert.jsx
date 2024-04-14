import React from "react";

function Alert({ type, message }) {
  let alertClasses = "px-4 py-2 rounded-md text-center mx-auto max-w-sm";

  // Determine alert type and apply corresponding styles
  if (type === "success") {
    alertClasses += " bg-green-100 text-green-700";
  } else if (type === "error") {
    alertClasses += " bg-red-100 text-red-700";
  } else if (type === "warning") {
    alertClasses += " bg-yellow-100 text-yellow-700";
  } else {
    // Default to info style
    alertClasses += " bg-blue-100 text-blue-700";
  }

  return (
    <div className={alertClasses}>
      {message}
    </div>
  );
}

export default Alert;
