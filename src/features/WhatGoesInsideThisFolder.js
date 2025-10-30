/* What goes inside this folder */

// Everything specific to one domain or module (auth, chat, quiz, profile, etc.)

// features/<feature>/hooks

/*
Use this for domain-specific hooks — logic that’s tied to that feature.
These hooks often depend on:

The feature’s Redux slice or Zustand store

The feature’s API layer

The feature’s business logic

They are not reusable outside that feature.
*/

// Example:
// features/auth/hooks/useLogin.ts

/*
features/
 ├── auth/
 │    ├── api/           # API calls related to auth
 │    │    ├── loginUser.ts
 │    │    ├── logoutUser.ts
 │    │    └── registerUser.ts
 │    │
 │    ├── components/    # UI parts specific to auth
 │    │    ├── LoginForm.tsx
 │    │    └── RegisterForm.tsx
 │    │
 │    ├── hooks/         # Feature-specific hooks
 │    │    └── useLogin.ts
 │    │
 │    ├── store/         # Redux slice or Zustand store for auth
 │    │    └── authSlice.ts
 │    │
 │    └── index.ts       # Public exports for the feature
 │
 └── chat/
      ├── api/           # Chat-related API calls
      ├── components/    # Chat UI (MessageList, ChatInput, etc.)
      ├── store/         # Chat store (messages, sockets, etc.)
      ├── hooks/         # useSendMessage, useChatSocket, etc.
      └── index.ts
*/