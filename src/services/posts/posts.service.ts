import environment from "../../environment";

import axios from "axios";

const posts_url = environment.posts_url;

export const findAllPosts = async () => {
  try {
    const response = await fetch(posts_url);
    const data = await response.json();
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

export default {
  findAllPosts,
};
