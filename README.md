# Actividad 2 · Navegación en React Native

App de práctica del curso UTN: un catálogo de módulos que combina **Stack Navigator**, **Tab Navigator**, **navegación anidada**, **paso de parámetros** y **Material Design 3** con React Native Paper.

## Cómo correrla

```bash
npm install
npx expo start
```

Después se puede abrir en Expo Go, emulador Android/iOS o web.

## Qué se aplicó de la consigna

| Requisito                                      | Dónde quedó                                                     |
| ---------------------------------------------- | --------------------------------------------------------------- |
| Stack Navigator (`createNativeStackNavigator`) | `src/navigation/HomeStack.tsx`                                  |
| Tab Navigator inferior                         | `src/navigation/TabNavigator.tsx`                               |
| Navegación anidada (Stack dentro de un Tab)    | pestaña **Inicio** monta `HomeStack`                            |
| `navigation` y `route` por props               | `HomeScreen`, `DetailsScreen`, `ExploreScreen`, `ProfileScreen` |
| `route.params` (el "equipaje")                 | `DetailsScreen` lee `const { item } = route.params`             |
| `navigation.navigate` / `push` / `goBack`      | listado, relacionados y botón atrás                             |
| Hooks `useNavigation` / `useRoute`             | `AppHeader` y `BotonVolver` (no son pantallas)                  |
| Tipado TypeScript de rutas                     | `src/types/navigation.ts`                                       |
| React Native Paper + `PaperProvider`           | `src/app/_layout.tsx`                                           |
| `SafeAreaProvider`                             | `src/app/_layout.tsx`                                           |
| `ScreenWrapper` reutilizable                   | `src/components/ScreenWrapper.tsx`                              |
| Estilos compartidos (grilla de 8 px)           | `src/theme/sharedStyles.ts`                                     |
| Ripple / feedback táctil                       | `Card` y `Button` de Paper                                      |

## Estructura

Las pantallas y navegadores **no** viven dentro de `src/app/` (salvo el layout raíz) para que Expo Router no los tome como rutas. El resto sigue la organización pedida en la actividad:

```text
src/
  app/
    _layout.tsx          PaperProvider + SafeAreaProvider + Stack raíz
    index.tsx            monta el TabNavigator
  navigation/
    TabNavigator.tsx     menú inferior (Inicio / Explorar / Perfil)
    HomeStack.tsx        Home → Details
    reactNavigation.ts   imports compatibles con Expo SDK 57
  screens/
    HomeScreen.tsx
    DetailsScreen.tsx
    ExploreScreen.tsx
    ProfileScreen.tsx
  components/
    ScreenWrapper.tsx
    AppHeader.tsx
    ModuloCard.tsx
    BotonVolver.tsx
  types/navigation.ts
  data/modulos.ts
  theme/
    paperTheme.ts
    sharedStyles.ts
```

## Cómo se comunican las pantallas

El navegador inyecta dos objetos en cada pantalla registrada:

1. **`navigation`** (control remoto)
   - `navigate('Details', { item })` va al detalle. Si esa ruta ya está adelante, no apila de más.
   - `push('Details', { item })` apila otra pantalla igual (módulos relacionados).
   - `goBack()` vuelve a la anterior (header, `BotonVolver` y gesto nativo).
   - `replace` queda explicado en Perfil: sirve para login, para que no se pueda volver al formulario.
2. **`route.params`** (equipaje)
   - Origen: `navigation.navigate('Details', { item })`
   - Destino: `const { item } = route.params`

Si el componente **no** es una pantalla (un botón o un header), no recibe esas props. Ahí se usan los hooks `useNavigation()` y `useRoute()`.

## Navegación anidada

```text
Expo Router (shell, 1 sola ruta)
  └── TabNavigator
        ├── Inicio → HomeStack
        │              ├── Home (lista)
        │              └── Details (params)
        ├── Explorar
        └── Perfil
```

Hay como máximo **dos niveles** de navegación de producto (Tab + Stack), como pide la consigna. El Stack de Expo Router solo envuelve la app.

Desde **Explorar** se entra al detalle del tab Inicio sin perder la barra inferior:

```ts
navigation.navigate("Inicio", {
  screen: "Details",
  params: { item },
});
```

## Material Design

- Márgenes y paddings en 8 / 16 / 24 / 32.
- Cards con elevación y ripple al tocar.
- Tema MD3 en `paperTheme.ts` (primario `#1565C0`).
- Appbar, Chip, FAB, Avatar y Button de React Native Paper.
