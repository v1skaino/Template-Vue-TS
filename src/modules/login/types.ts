import { Ref } from "vue";

type LoginTypes = {
  state: { label: Ref<string> };
  handlers: { updateLabel: () => void; navigate: () => void };
};

export type { LoginTypes };
