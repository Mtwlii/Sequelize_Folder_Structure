export const getAllUsers = async (req, res) => {
  res.json({ message: "Get all users" });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Get user with id ${id}` });
};

export const createUser = async (req, res) => {
  res.json({ message: "User created" });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} updated` });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} deleted` });
};

// export default { getAllUsers, getUserById, createUser, updateUser, deleteUser };
