import { ref } from "vue";
import { useRouter } from "vue-router";
import { LoginTypes } from "./types";

export default function useLogin(): LoginTypes {
  const label = ref("Login");
  const router = useRouter();

  const updateLabel = () => {
    label.value = "Você está na tela de login!";
  };

  const navigate = () => {
    router.push({ name: "Home" });
  };

  return {
    state: { label },
    handlers: { updateLabel, navigate },
  };
}
