export const getAllBlogs = async (req, res) => {
  res.json({ message: "Get all blogs" });
};

export const getBlogById = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Get blog with id ${id}` });
};

export const createBlog = async (req, res) => {
  res.json({ message: "Blog created" });
};

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Blog ${id} updated` });
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Blog ${id} deleted` });
};
