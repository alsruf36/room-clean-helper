<script setup lang="ts">
import { FurnitureInfoProps } from '~/types'
const { t } = useLang()

const lists = computed<FurnitureInfoProps[]>(() => [
  { id: 1, korName: '냉장고', engName: 'Refrigerator', recognized: '10', infoNum: '10', latest: '1' },
  { id: 2, korName: '싱크대', engName: 'Sink', recognized: '12', infoNum: '30', latest: '1' },
])

const isScan = ref(false)
</script>

<template>
  <div class="relative flex flex-col justify-center min-h-screen py-6 overflow-hidden bg-gray-50 sm:py-12">
    <img src="~/assets/img/beams.png" alt="" class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-none" width="1308">
    <div class="absolute inset-0 bg-[url(~/assets/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    <div class="flex flex-col justify-start items-start flex-grow gap-2.5">
      <div class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 px-[22px]">
        <div
          class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[58px] w-[280px] relative gap-2.5"
        >
          <svg
            width="266"
            height="38"
            viewBox="0 0 266 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path
              d="M24.6277 3.18008H3.11537V18.7394H22.3439V21.159H3.11537V37.2394H0.5V0.760563H24.6277V3.18008ZM48.3503 37.5C44.814 37.5 41.6215 36.6935 38.7729 35.0805C35.8996 33.4675 33.6526 31.2589 32.0318 28.4547C30.3865 25.6258 29.5638 22.4742 29.5638 19C29.5638 15.5258 30.3865 12.3867 32.0318 9.5825C33.6526 6.75352 35.8996 4.53253 38.7729 2.91952C41.6215 1.30651 44.814 0.5 48.3503 0.5C51.8866 0.5 55.079 1.30651 57.9277 2.91952C60.8009 4.50771 63.048 6.70389 64.6687 9.50805C66.3141 12.337 67.1368 15.501 67.1368 19C67.1368 22.5238 66.3141 25.6878 64.6687 28.492C63.048 31.2961 60.8009 33.5047 57.9277 35.1177C55.079 36.7059 51.8866 37.5 48.3503 37.5ZM48.3503 35.0433C51.3709 35.0433 54.109 34.3484 56.5648 32.9588C58.996 31.5691 60.9115 29.6583 62.3112 27.2264C63.7356 24.7696 64.4477 22.0275 64.4477 19C64.4477 15.9725 63.7356 13.2428 62.3112 10.8109C60.9115 8.35412 58.996 6.43092 56.5648 5.04125C54.109 3.65158 51.3709 2.95674 48.3503 2.95674C45.3297 2.95674 42.5916 3.65158 40.1358 5.04125C37.6801 6.43092 35.74 8.35412 34.3157 10.8109C32.9159 13.2428 32.216 15.9725 32.216 19C32.216 22.0275 32.9159 24.7696 34.3157 27.2264C35.74 29.6583 37.6801 31.5691 40.1358 32.9588C42.5916 34.3484 45.3297 35.0433 48.3503 35.0433ZM104.305 37.2394H101.321L92.7011 25.0674C91.4242 25.2411 90.2577 25.328 89.2017 25.328H78.8875V37.2394H76.2353V0.760563H89.2017C93.7448 0.760563 97.3057 1.85245 99.8842 4.03622C102.463 6.19517 103.752 9.21026 103.752 13.0815C103.752 15.9601 103.015 18.3796 101.542 20.34C100.093 22.3005 98.0056 23.6777 95.2797 24.4718L104.305 37.2394ZM78.8875 22.9829H89.2017C93.0572 22.9829 95.9919 22.1144 98.0056 20.3773C100.044 18.665 101.063 16.2331 101.063 13.0815C101.063 9.9051 100.044 7.46077 98.0056 5.74849C95.9919 4.03622 93.0572 3.18008 89.2017 3.18008H78.8875V22.9829ZM136.131 37.5C133.479 37.5 130.962 37.0409 128.58 36.1227C126.173 35.2046 124.307 34.0134 122.981 32.5493L124.159 30.5765C125.436 31.9413 127.143 33.0456 129.28 33.8893C131.441 34.7331 133.7 35.1549 136.057 35.1549C139.495 35.1549 142.099 34.4973 143.867 33.1821C145.61 31.8669 146.482 30.1422 146.482 28.008C146.482 26.395 146.015 25.0922 145.082 24.0996C144.174 23.1318 143.032 22.3873 141.657 21.8662C140.281 21.3451 138.415 20.8115 136.057 20.2656C133.43 19.5956 131.306 18.9504 129.685 18.33C128.089 17.7096 126.738 16.7418 125.633 15.4266C124.503 14.1362 123.938 12.3991 123.938 10.2153C123.938 8.42857 124.405 6.80315 125.338 5.33903C126.271 3.8501 127.696 2.67136 129.611 1.80282C131.502 0.934273 133.884 0.5 136.757 0.5C138.746 0.5 140.699 0.797787 142.614 1.39336C144.554 1.98893 146.224 2.78303 147.624 3.77565L146.629 5.93461C145.205 4.91717 143.621 4.14789 141.878 3.62676C140.134 3.10563 138.427 2.84507 136.757 2.84507C133.417 2.84507 130.888 3.5275 129.169 4.89235C127.45 6.2324 126.59 7.98189 126.59 10.1408C126.59 11.7787 127.057 13.0815 127.99 14.0493C128.899 15.0171 130.041 15.7616 131.416 16.2827C132.791 16.8038 134.67 17.3622 137.052 17.9577C139.704 18.6278 141.816 19.273 143.388 19.8934C144.984 20.5138 146.335 21.4567 147.44 22.7223C148.569 23.9879 149.134 25.7002 149.134 27.8592C149.134 29.6459 148.655 31.2589 147.698 32.6982C146.764 34.1623 145.316 35.3286 143.351 36.1972C141.386 37.0657 138.98 37.5 136.131 37.5ZM173.373 37.5C169.812 37.5 166.607 36.6935 163.758 35.0805C160.91 33.4675 158.663 31.2589 157.017 28.4547C155.396 25.6258 154.586 22.4742 154.586 19C154.586 15.5258 155.396 12.3867 157.017 9.5825C158.663 6.75352 160.91 4.53253 163.758 2.91952C166.607 1.30651 169.812 0.5 173.373 0.5C176.909 0.5 180.101 1.30651 182.95 2.91952C185.799 4.50771 188.046 6.70389 189.691 9.50805C191.312 12.337 192.122 15.501 192.122 19C192.122 22.5238 191.312 25.6878 189.691 28.492C188.046 31.2961 185.799 33.5047 182.95 35.1177C180.101 36.7059 176.909 37.5 173.373 37.5ZM173.373 35.0433C176.393 35.0433 179.119 34.3484 181.55 32.9588C184.006 31.5691 185.934 29.6583 187.333 27.2264C188.733 24.7696 189.433 22.0275 189.433 19C189.433 15.9725 188.733 13.2428 187.333 10.8109C185.934 8.35412 184.006 6.43092 181.55 5.04125C179.119 3.65158 176.393 2.95674 173.373 2.95674C170.327 2.95674 167.577 3.65158 165.121 5.04125C162.665 6.43092 160.738 8.35412 159.338 10.8109C157.914 13.2428 157.201 15.9725 157.201 19C157.201 22.0275 157.914 24.7696 159.338 27.2264C160.738 29.6583 162.665 31.5691 165.121 32.9588C167.577 34.3484 170.327 35.0433 173.373 35.0433ZM201.258 37.2394V0.760563H203.873V34.8571H224.685V37.2394H201.258ZM246.75 37.5C243.214 37.5 240.009 36.6935 237.136 35.0805C234.287 33.4675 232.053 31.2589 230.432 28.4547C228.787 25.6258 227.964 22.4742 227.964 19C227.964 15.5258 228.787 12.3867 230.432 9.5825C232.053 6.75352 234.287 4.53253 237.136 2.91952C240.009 1.30651 243.214 0.5 246.75 0.5C250.287 0.5 253.479 1.30651 256.328 2.91952C259.176 4.50771 261.423 6.70389 263.069 9.50805C264.69 12.337 265.5 15.501 265.5 19C265.5 22.5238 264.69 25.6878 263.069 28.492C261.423 31.2961 259.176 33.5047 256.328 35.1177C253.479 36.7059 250.287 37.5 246.75 37.5ZM246.75 35.0433C249.771 35.0433 252.497 34.3484 254.928 32.9588C257.384 31.5691 259.312 29.6583 260.711 27.2264C262.136 24.7696 262.848 22.0275 262.848 19C262.848 15.9725 262.136 13.2428 260.711 10.8109C259.312 8.35412 257.384 6.43092 254.928 5.04125C252.497 3.65158 249.771 2.95674 246.75 2.95674C243.73 2.95674 240.979 3.65158 238.499 5.04125C236.043 6.43092 234.116 8.35412 232.716 10.8109C231.316 13.2428 230.616 15.9725 230.616 19C230.616 22.0275 231.316 24.7696 232.716 27.2264C234.116 29.6583 236.043 31.5691 238.499 32.9588C240.979 34.3484 243.73 35.0433 246.75 35.0433Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[120px]">
          <LanguageChange />
        </div>
      </div>

      <div
        class="flex flex-col justify-center items-center self-stretch flex-grow flex-shrink-0 gap-[29px]"
      >
        <div
          class="flex flex-col justify-start items-start self-stretch flex-grow flex-shrink-0 relative gap-2 px-[25px]"
          @click="isScan = !isScan"
        >
          <p class="flex-grow-0 flex-shrink-0 text-3xl font-semibold text-left text-gray-700">
            {{ t("scanTitle") }}
          </p>
          <div
            class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[19px] py-[26px] rounded-[10px] bg-indigo-800"
          >
            <transition
              enter-active-class="duration-300 ease-out"
              enter-from-class="transform scale-75 opacity-0"
              enter-to-class="scale-100 opacity-100"
              leave-active-class="duration-200 ease-in"
              leave-from-class="scale-100 opacity-100"
              leave-to-class="transform scale-75 opacity-0"
            >
              <div v-if="!isScan">
                <div class="flex flex-col items-start justify-center flex-grow-0 flex-shrink-0">
                  <div class="relative flex items-start justify-start flex-grow-0 flex-shrink-0">
                    <p class="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left text-white">
                      {{ $t('scanCardTitle') }}
                    </p>
                  </div>
                  <div class="relative flex items-start justify-start flex-grow-0 flex-shrink-0">
                    <p class="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                      {{ $t('scanCardInfo') }}
                    </p>
                  </div>
                </div>
              </div>
              <div v-else>
                <CameraCard />
              </div>
            </transition>
          </div>
          <div
            class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[50px] gap-2.5 px-[19px] py-[9px] rounded-[10px] bg-[#371a94]"
            style="box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06);"
          >
            <div class="flex items-center self-stretch justify-between flex-grow-0 flex-shrink-0">
              <div class="relative flex items-start justify-start flex-grow-0 flex-shrink-0">
                <p class="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                  {{ $t('scanCardModel') }}
                </p>
              </div>
              <div class="relative flex items-start justify-start flex-grow-0 flex-shrink-0">
                <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-right text-white">
                  YOLOV4 N
                </p>
              </div>
            </div>
          </div>
        </div>

        <transition
          enter-active-class="duration-300 ease-out"
          enter-from-class="transform scale-75 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="duration-200 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="transform scale-75 opacity-0"
        >
          <div
            v-if="!isScan"
            class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-[25px]"
          >
            <p class="flex-grow-0 flex-shrink-0 text-3xl font-semibold text-left text-gray-700">
              {{ $t('recognizedFurniture') }}
            </p>
            <FurnitureCard
              v-for="item in lists"
              :key="item.id"
              :furniture-info-props="{
                id: item.id,
                korName: item.korName,
                engName: item.engName,
                recognized: item.recognized,
                infoNum: item.infoNum,
                latest: item.latest,
              }"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
