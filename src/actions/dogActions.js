
export const changeStatus = (chipNumber, dogStatus) => (
  {
    type: "CHANGE_STATUS",
    chipNumber: chipNumber,
    status: dogStatus,
  }
)

export const addDog = (newDog) => (
  {
    type: "ADD_DOG",
    payload: newDog
  }
)

export const removeDog = () => (
  {
    type: "ADD_DOG",
    payload: newDog
  }
)




