<template>
	<li :class="{ completed: checked }">
		<div class="view">
			<input
				class="toggle"
				type="checkbox"
				v-model="props.modelValue.checked"
				@update:modelValue="toggleChecked"
			/>
			<label><input type="text" v-model="message" /></label>
			<button @click="destroy" class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template" />
	</li>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { Todo } from "../domain/Todo";
const props = defineProps({
	modelValue: { type: Object as PropType<Todo>, required: true },
});

const emit = defineEmits(["update:modelValue", "destroyTodo"]);

const checked = ref(props.modelValue.checked);
const message = ref(props.modelValue.message);
// props.modelValue.checked = false;

watch(
	() => message.value,
	(newMessage) => {
		console.log("newMessage", newMessage);
		const newValue = props.modelValue;
		newValue.message = newMessage;
		emit("update:modelValue", newValue);
	}
);

function toggleChecked() {
	console.log("toggleChecked", props.modelValue.checked);
	const newValue = props.modelValue;
	newValue.checked = props.modelValue.checked;
	checked.value = props.modelValue.checked;
	emit("update:modelValue", newValue);
}

function destroy() {
	emit("destroyTodo");
	console.log("destroy", props.modelValue.id);
}
</script>
