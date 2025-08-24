# plant-back

Минималистичный CRUD API на Express + TypeScript для работы с растениями (in-memory).  
Проект учебный — данные сейчас хранятся в памяти (массив `PLANTS`). Сервисная архитектура позволяет легко заменить хранение на базу/облако в будущем.

## Быстрый старт

Требования:
- Node.js (v16+ / v18+ рекомендую)
- pnpm (рекомендуется). Если не установлен:
```bash
npm install -g pnpm
| Метод  | URL           | Body / Params           | Ответ                                        |
| ------ | ------------- | ----------------------- | -------------------------------------------- |
| GET    | `/plants`     | —                       | `[ {_id, name, createdAt, updatedAt}, ... ]` |
| GET    | `/plants/:id` | `id` в URL              | `{ _id, name, createdAt, updatedAt }`        |
| POST   | `/plants`     | `{ "name": "Rose" }`    | `{ _id, name, createdAt, updatedAt }`        |
| PUT    | `/plants/:id` | `{ "name": "NewName" }` | `{ _id, name, createdAt, updatedAt }`        |
| DELETE | `/plants/:id` | `id` в URL              | `204 No Content`                             |
