import { render } from "@testing-library/vue";
import HomeView from "@/views/HomeView.vue";

test("test render", async () => {
  const { getByText } = render(HomeView);
  getByText("Proyecto Adopcion de Mascotas");
});
