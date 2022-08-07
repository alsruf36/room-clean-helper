<script setup lang="ts">
import { FurnitureInfoProps } from '~/types'
const { t } = useLang()

const lists = computed<FurnitureInfoProps[]>(() => [
  { id: 1, korName: '냉장고', engName: 'Refrigerator', recognized: '10', infoNum: '10', latest: '1' },
  { id: 2, korName: '냉장냉장냉장ㅌ고', engName: 'Refrigerator', recognized: '10', infoNum: '10', latest: '1' },
])
</script>

<template>
  <div class="max-w-sm mx-auto mt-4">
    <div class="flex items-center justify-between mb-10">
      <a target="_blank" href="https://productdevbook.com">productdevbook.com</a>
      <div class="flex space-x-2">
        <LanguageChange />
        <ColorChange />
      </div>
    </div>
    <div class="flex flex-col">
      <h1>{{ t("follow") }}</h1>
      <div class="flex items-center justify-between w-full py-2">
        <img
          class="w-20 h-20 rounded-full"
          height="160"
          width="160"
          src="https://avatars.githubusercontent.com/u/38668796?v=4"
          alt="productdevbook"
        >

        <div
          class="place-items-centerr grid grid-cols-3 justify-items-center gap-4 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:rounded-md [&>*]:bg-gray-100 [&>*]:p-3 dark:[&>*]:bg-gray-600"
        >
          <a
            target="blank"
            class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400"
            href="https://github.com/productdevbook"
          >
            <UnoIcon class="i-ph-github-logo-duotone" />
          </a>

          <a
            class="hover:bg-gray-300 dark:hover:bg-gray-400"
            href="https://twitter.com/productdevbook"
            target="_blank"
          >
            <UnoIcon class="i-ph-twitter-logo-duotone" />
          </a>

          <a
            target="blank"
            class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400"
            href="https://discord.gg/UN8mqgC79S"
          >
            <UnoIcon class="i-ph-discord-logo-duotone" />
          </a>
        </div>
      </div>
    </div>

    <ul role="list" class="mt-10 space-y-4">
      <li v-for="item in lists" :key="item.id">
        <FurnitureCard
          :card="{
            id: item.id,
            korName: item.korName,
            engName: item.engName,
            recognized: item.recognized,
            infoNum: item.infoNum,
            latest: item.latest,
          }"
        />
      </li>
    </ul>
  </div>
</template>
