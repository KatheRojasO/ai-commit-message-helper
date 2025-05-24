import type React from "react";

export type CommitResponse = {
  title: string;
  description: string;
};

export type DiffInputProps = {
  setCommitMessage: React.Dispatch<React.SetStateAction<string>>;
};

export type CommitSuggestionBoxProps = {
  message: string;
};