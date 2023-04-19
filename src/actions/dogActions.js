
export const changeStatus = (chipNumber, dogStatus) => (
  {
    type: "CHANGE_STATUS",
    chipNumber: chipNumber,
    status: dogStatus,
  }
)

