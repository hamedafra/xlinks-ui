import { createSlice } from '@reduxjs/toolkit';

interface DownloadState {
    progress: number;
    isDownloading: boolean;
}

const initialState: DownloadState = {
    progress: 0,
    isDownloading: false,
};

const downloadSlice = createSlice({
    name: 'download',
    initialState,
    reducers: {
        setProgress: (state, action) => {
            state.progress = action.payload;
        },
        setIsDownloading: (state, action) => {
            state.isDownloading = action.payload;
        },
    },
});

export const { setProgress, setIsDownloading } = downloadSlice.actions;
export default downloadSlice.reducer;