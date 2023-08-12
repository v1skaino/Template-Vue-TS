import { ref } from "vue";
import { useRouter } from "vue-router";
import { HomeType } from "./types";

export default function useHome(): HomeType {
  const label = ref("Olá");
  const router = useRouter();

  const updateLabel = () => {
    label.value = "Atualizou!";
  };

  const navigate = () => {
    router.push("/login");
  };

  return {
    state: { label },
    handlers: { updateLabel, navigate },
  };
}
