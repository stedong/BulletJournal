import { createSlice, PayloadAction } from 'redux-starter-kit';
import { Note } from './interface';
import { History } from 'history';
import {Content} from "../myBuJo/interface";

export type NoteApiErrorAction = {
  error: string;
};

export type UpdateNotes = {
  projectId: number;
};

export type UpdateNoteContents = {
  noteId: number;
};

export type updateVisibleAction = {
  visible: boolean;
};

export type CreateNote = {
  projectId: number;
  name: string;
};

export type CreateContent = {
  noteId: number;
  text: string;
};

export type GetNote = {
  noteId: number;
};

export type NotesAction = {
  notes: Array<Note>;
};

export type NoteAction = {
  note: Note;
};

export type PutNote = {
  projectId: number;
  notes: Note[];
};

export type DeleteNote = {
  noteId: number;
};

export type DeleteContent = {
  noteId: number;
  contentId: number;
};

export type PatchNote = {
  noteId: number;
  name: string;
};

export type PatchContent = {
  noteId: number;
  contentId: number;
  text: string;
}

export type SetNoteLabels = {
  noteId: number;
  labels: number[];
};

export type MoveNote = {
  noteId: number;
  targetProject: number;
  history: History;
};

export type ShareNote = {
  targetUser: string;
  noteId: number;
  targetGroup: number;
  generateLink: boolean;
};

export type ContentsAction = {
  contents: Content[];
}

let initialState = {
  note: {} as Note,
  contents: [] as Array<Content>,
  notes: [] as Array<Note>,
  addNoteVisible: false,
  patchLoading: true
};

const slice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    notesReceived: (state, action: PayloadAction<NotesAction>) => {
      const { notes } = action.payload;
      state.notes = notes;
      state.patchLoading = false;
    },
    noteReceived: (state, action: PayloadAction<NoteAction>) => {
      const { note } = action.payload;
      state.note = note;
    },
    noteContentsReceived: (state, action: PayloadAction<ContentsAction>) => {
      const { contents } = action.payload;
      state.contents = contents;
    },
    UpdateAddNoteVisible: (
      state,
      action: PayloadAction<updateVisibleAction>
    ) => {
      const { visible } = action.payload;
      state.addNoteVisible = visible;
    },
    noteApiErrorReceived: (state, action: PayloadAction<NoteApiErrorAction>) =>
      state,
    NotesUpdate: (state, action: PayloadAction<UpdateNotes>) => state,
    NoteContentsUpdate: (state, action: PayloadAction<UpdateNoteContents>) => state,
    NotesCreate: (state, action: PayloadAction<CreateNote>) => state,
    NoteContentCreate: (state, action: PayloadAction<CreateContent>) => state,
    NotePut: (state, action: PayloadAction<PutNote>) => state,
    NoteGet: (state, action: PayloadAction<GetNote>) => state,
    NoteDelete: (state, action: PayloadAction<DeleteNote>) => state,
    NoteContentDelete: (state, action: PayloadAction<DeleteContent>) => state,
    NotePatch: (state, action: PayloadAction<PatchNote>) => {
      state.patchLoading = false },
    NoteContentPatch: (state, action: PayloadAction<PatchContent>) => state,
    NoteSetLabels: (state, action: PayloadAction<SetNoteLabels>) => state,
    NoteMove: (state, action: PayloadAction<MoveNote>) => state,
    NoteShare: (state, action: PayloadAction<ShareNote>) => state,
  }
});

export const reducer = slice.reducer;
export const actions = slice.actions;
