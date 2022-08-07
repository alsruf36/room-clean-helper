<script setup lang="ts">
import { FurnitureInfoProps } from '~/types'

defineProps({
  furnitureInfoProps: {
    type: Object as () => FurnitureInfoProps,
    required: true,
  },
})

const { t } = useLang()
</script>

<template>
  <div
    class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-[15px] py-3 rounded-[10px]"
    style="background: linear-gradient(153.14deg, #4d22b3 -23.44%, #5d2ad7 84.5%);"
  >
    <div class="flex items-center self-stretch justify-between flex-grow-0 flex-shrink-0">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative px-2.5">
        <p class="flex-grow-0 flex-shrink-0 text-3xl font-bold text-center text-[#ebe9fe]">
          {{ furnitureInfoProps.korName }}
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-center text-[#ebe9fe]">
          {{ furnitureInfoProps.engName }}
        </p>
      </div>
      <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-0.5 px-2.5">
        <div class="relative flex items-start self-stretch justify-between flex-grow-0 flex-shrink-0">
          <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#ebe9fe]">
            {{ $t('recognized.Card.NumberOfRecognition.Title') }}
          </p>
          <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#ebe9fe]">
            {{ furnitureInfoProps.recognized }}{{ $t('recognized.Card.NumberOfRecognition.Suffix') }}
          </p>
        </div>
        <div
          class="relative flex items-center self-stretch justify-between flex-grow-0 flex-shrink-0"
        >
          <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#ebe9fe]">
            {{ $t('recognized.Card.CleanInfo.Title') }}
          </p>
          <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#ebe9fe]">
            {{ furnitureInfoProps.infoNum }}{{ $t('recognized.Card.CleanInfo.Suffix') }}
          </p>
        </div>
        <div
          class="relative flex items-center self-stretch justify-between flex-grow-0 flex-shrink-0"
        >
          <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#ebe9fe]">
            {{ $t('recognized.Card.LastClean.Title') }}&nbsp;
          </p>
          <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#ebe9fe]">
            {{ furnitureInfoProps.latest }}{{ $t('recognized.Card.LastClean.Suffix') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
