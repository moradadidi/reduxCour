import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ],
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticle: (state, action) => {
        const newArticle = { id: state.articles.length + 1, title: action.payload.title, body: action.payload.body };
      state.articles.push(newArticle);
    },
    
    removeArticle: (state, action) => {
      state.articles = state.articles.filter((article) => article.id !== action.payload.id);
    },
  },
  
});

export const { addArticle , removeArticle } = articleSlice.actions;

export default articleSlice.reducer;
