import { createAction } from '@reduxjs/toolkit';
import * as types from './constants';

export const getListMovieRequest = createAction(types.GET_LIST_MOVIE_REQUEST);
export const getListMovieError = createAction(types.GET_LIST_MOVIE_FAILED);

export const getMovieInfoRequest = createAction(types.GET_MOVIE_INFO_REQUEST);
export const getMovieInfoError = createAction(types.GET_COMMENT_FAILED);

export const getCommentRequest = createAction(types.GET_COMMENT_REQUEST);
export const getCommentError = createAction(types.GET_COMMENT_FAILED);

export const postCommentRequest = createAction(types.POST_COMMENT_REQUEST);
export const postCommentError = createAction(types.POST_COMMENT_FAILED);

export const searchMovieRequest = createAction(types.SEARCH_MOVIE_REQUEST);
