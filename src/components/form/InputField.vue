<template>
  <div>
    <input class="p-3 w-full shadow-md" :type="type" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)">
    <p class="absolute mt-1 p-1 pin-x form-notification flex" v-if="error">
      <QuestionMarkSVG class="fill-current w-4 h-4 mr-2"></QuestionMarkSVG>
      <span v-text="error"></span>
    </p>
  </div>
</template>

<script>
import QuestionMarkSVG from '@/components/svg/QuestionMarkSVG'

export default {
  name: 'inputField',
  components: {
    QuestionMarkSVG
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    },
    error: {
      type: [String, null]
    },
    value: {
      type: [String, null]
    }
  }
}
</script>

<style lang="scss">
  .form-notification {
    background-color: $dark-grey;
    color: $light-grey;

    .secondary {
      fill: $dark-grey;
    }
  }
</style>
