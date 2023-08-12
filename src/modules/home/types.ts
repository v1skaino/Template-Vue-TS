import { Ref } from "vue";

type HomeType = {
  state: { label: Ref<string> };
  handlers: { updateLabel: () => void; navigate: () => void };
};

export type { HomeType };
