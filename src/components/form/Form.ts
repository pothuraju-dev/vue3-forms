import { h, defineComponent } from "vue";

export default defineComponent({
  name: "Form",
  emits: ["update:modelValue", "input", "blur", "change"],
  props: ["modelValue"],
  setup(props, context) {
    return () => {
      if (context.attrs.type === "textarea")
        return h("div", [
          h("textarea", {
            ...context.attrs,
            value: props.modelValue,
            onInput: (event: InputEvent) =>
              context.emit(
                "update:modelValue",
                (event.target as HTMLInputElement).value
              ),
            class: {
              "border border-gray-200 rounded rounded-md": true,
            },
          }),
        ]);
      else
        return h("div", [
          h("input", {
            ...context.attrs,
            value: props.modelValue,
            onInput: (event: InputEvent) =>
              context.emit(
                "update:modelValue",
                (event.target as HTMLInputElement).value
              ),
            class: {
              "border border-gray-200 rounded rounded-md": true,
            },
          }),
        ]);
    };
  },
});
