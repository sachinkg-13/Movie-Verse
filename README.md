# Movie Verse

Movie Verse is a mobile application built with [Expo](https://expo.dev) that allows users to discover, search for, and view details about movies. The app features sections for the latest movies, trending movies, and individual movie details, all powered by The Movie Database (TMDB) API and Appwrite for analytics.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [License](#license)

## Overview

Movie Verse provides a seamless experience for movie enthusiasts. Users can:
- Browse trending and latest movies.
- Search for movies with a debounced search bar.
- View movie details including overview, genres, budget, and cast information.
- Enjoy smooth transitions with file-based routing powered by Expo Router.

## Features

- **Search Functionality:** Instant search with debouncing ([`components/SearchBar.tsx`](components/SearchBar.tsx)).
- **Trending Movies:** Displays a list of trending movies, updated based on search count analytics ([`services/appwrite.tsx`](services/appwrite.tsx)).
- **Movie Details:** In-depth details for each movie ([`app/movies/[id].tsx`](app/movies/[id].tsx)).
- **Responsive UI:** Custom styling with Nativewind and Tailwind CSS ([`tailwind.config.js`](tailwind.config.js)).
- **Routing:** File-based routing with Expo Router ([`app/_layout.tsx`](app/_layout.tsx), [`.expo/types/router.d.ts`](.expo/types/router.d.ts)).

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/sachinkg-13/Movie-Verse.git
    ```

2. Navigate to the project directory:

    ```sh
    cd mobile-movie-app
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

## Running the Project

Start the development server with:

```sh
npm start
```

Then follow the prompts to run the project on your preferred simulator or device:
- **Android:** `npm run android`
- **iOS:** `npm run ios`
- **Web:** `npm run web`

## Screenshots

Below are some screenshots of the app in action:

<table>
  <tr>
    <td align="center">
      <img src="https://cloud.appwrite.io/v1/storage/buckets/67dc4d05001418976ee9/files/67dc4d1400227663beb5/view?project=67d3dcd50017fecc118d&mode=admin" alt="Home Screen" style="max-width:300px;"/>
    </td>
    <td align="center">
      <img src="https://cloud.appwrite.io/v1/storage/buckets/67dc4d05001418976ee9/files/67dc4d1d003df6ca9733/view?project=67d3dcd50017fecc118d&mode=admin" alt="Search Screen" style="max-width:300px;"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://cloud.appwrite.io/v1/storage/buckets/67dc4d05001418976ee9/files/67dc4d2500078bd28c04/view?project=67d3dcd50017fecc118d&mode=admin" alt="Search Results" style="max-width:300px;"/>
    </td>
    <td align="center">
      <!-- empty cell -->
    </td>
  </tr>
</table>


> **Note:** Replace the paths above with the actual paths of your screenshot images.

## Project Structure

```
.
├── app
│   ├── _layout.tsx         // Root navigation layout ([`app/_layout.tsx`](app/_layout.tsx))
│   ├── onboarding.tsx      // Onboarding screen ([`app/onboarding.tsx`](app/onboarding.tsx))
│   └── (tabs)
│       ├── index.tsx       // Home screen with trending and latest movies ([`app/(tabs)/index.tsx`](app/(tabs)/index.tsx))
│       ├── search.tsx      // Search screen ([`app/(tabs)/search.tsx`](app/(tabs)/search.tsx))
│       ├── saved.tsx       // Saved movies screen ([`app/(tabs)/saved.tsx`](app/(tabs)/saved.tsx))
│       └── profile.tsx     // Profile screen ([`app/(tabs)/profile.tsx`](app/(tabs)/profile.tsx))
├── assets
│   ├── images              // Background images and screenshots ([`assets/images`](assets/images))
│   └── fonts
├── components
│   ├── MovieCard.tsx       // Movie card component ([`components/MovieCard.tsx`](components/MovieCard.tsx))
│   ├── SearchBar.tsx       // Search bar component ([`components/SearchBar.tsx`](components/SearchBar.tsx))
│   └── TrendingCard.tsx    // Trending movie card component ([`components/TrendingCard.tsx`](components/TrendingCard.tsx))
├── constants
│   ├── icons.ts            // Icon assets ([`constants/icons.ts`](constants/icons.ts))
│   └── images.ts           // Image assets ([`constants/images.ts`](constants/images.ts))
├── services
│   ├── api.tsx             // API integration for fetching movies ([`services/api.tsx`](services/api.tsx))
│   ├── appwrite.tsx        // Appwrite services for analytics ([`services/appwrite.tsx`](services/appwrite.tsx))
│   └── useFetch.ts         // Custom hook for data fetching ([`services/useFetch.ts`](services/useFetch.ts))
├── interfaces
│   └── interfaces.d.ts     // TypeScript interfaces ([`interfaces/interfaces.d.ts`](interfaces/interfaces.d.ts))
├── .expo
│   └── types
│       └── router.d.ts     // Expo Router type definitions ([`.expo/types/router.d.ts`](.expo/types/router.d.ts))
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## Technologies

- **Expo & React Native:** For building native mobile apps.
- **Expo Router:** For file-based navigation.
- **Nativewind & Tailwind CSS:** For styling.
- **Appwrite:** For backend services and analytics.
- **TMDB API:** For movie data.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.