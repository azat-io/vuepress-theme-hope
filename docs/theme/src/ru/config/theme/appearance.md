---
title: Опции внешнего вида темы
icon: config
order: 5
category:
  - Конфиг
tag:
  - Конфиг темы
  - Внешний вид
---

Следующие параметры управляют внешним видом темы. В большинстве случаев на них не нужно обращать внимание, они предусмотрены лишь для небольшого количества пользователей с потребностями.

<!-- more -->

::: warning

Эти параметры действительны только при установке непосредственно под параметрами темы, установка их на каждом языке не влияет.

:::

## iconAssets <Badge text="Только root" type="warning" />

- Тип: `` "iconfont" | "fontawesome" | `//${string}` | `http://${string}` | `https://${string}`  ``
- Обязательный: Нет
- Детали: [Интерфейс → Иконка](../../guide/interface/icon.md)

Поддерживается ссылка на ресурс иконки шрифта, ключевые слова `'iconfont'` и `'fontawesome'`.

## darkmode <Badge text="Включено по умолчанию" /> <Badge text="Только root" type="warning" />

- Тип: `"switch" | "toggle" | "auto" | "enable" | "disable"`
- По умолчанию: `"switch"`
- Детали: [Интерфейс → Темный режим](../../guide/interface/darkmode.md)

Варианты поддержки темного режима:

- `"switch"`: переключение между темным, светлым и авто
- `"toggle"`: переключение между светлым и темным режимами
- `"auto"`: автоматически решать, применять ли темный режим на основе цветовой схемы пользовательского устройства или текущего времени
- `"enable"`: только темный режим
- `"disable"`: отключить темный режим

::: note

Если вам не нужна эта функция, установите `darkmode: "disable"`, чтобы отключить ее.

:::

## themeColor <Badge text="Только root" type="warning" />

- Тип: `Record<string, string> | false`
- По умолчанию: `false`
- Детали: [Интерфейс → Цвет темы](../../guide/interface/theme-color.md)

Конфигурация цвета темы.

## fullscreen <Badge text="Только root" type="warning" />

- Тип: `boolean`
- По умолчанию: `false`
- Детали: [Интерфейс → Кнопка «Полноэкранный режим»](../../guide/interface/others.md#полноэкранная-кнопка)

Показывать ли кнопку «полноэкранный режим».

## backToTop <Badge text="Только root" type="warning" />

- Тип: `boolean | number`
- По умолчанию: `true`
- Детали: [Интерфейс → Кнопка «Наверх»](../../guide/interface/others.md#кнопка-«вернуться-к-началу»)

Показывать ли кнопку «Вернуться к началу».

Расстояние срабатывания по умолчанию составляет 300 пикселей, которое можно изменить, указав число. Заполнение `false` отключает кнопку «Наверх».

## mobileBreakPoint <Badge text="Только root" type="warning" />

- Тип: `number`
- По умолчанию: `719`

Ширина окна при переключении мобильного представления и представления рабочего стола в пикселях

::: warning

Вы должны оставить для этой опции то же значение, что и для `$tablet` в `.vuepress/config.scss`

:::

## wideBreakPoint <Badge text="Только root" type="warning" />

- Тип: `number`
- По умолчанию: `1440`

Window width switching wide screen view and desktop view in pixels

::: warning

Вы должны оставить для этой опции то же значение, что и для `$pc` в `.vuepress/config.scss`

:::

## pure <Badge text="Только root" type="warning" />

- Тип: `boolean`
- По умолчанию: `false`
- Детали: [Интерфейс → Чистый режим](../../guide/interface/pure.md)

Включить ли чистый режим.

::: tip

Включение этого отключит некоторые причудливые стили.

Полезно, когда вы хотите предоставить «Сайт с чистой документацией».

:::

## print <Badge text="Root only" type="warning" />

- Type: `boolean`
- Default: `true`

Whether display print icon in desktop mode.

## iconPrefix <Badge text="Только root" type="warning" />

- Тип: `string`
- По умолчанию: Выводится из iconAssets
- Детали: [Интерфейс → Иконка](../../guide/interface/icon.md)

Префикс значка FontClass， обычно он может быть автоматически установлен темой.
