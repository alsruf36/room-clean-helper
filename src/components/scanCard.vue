<template>
  <div
    class="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5 px-[19px] py-[26px] rounded-[10px] bg-indigo-800"
  >
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
</template>
