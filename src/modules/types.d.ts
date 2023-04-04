import type {
  createModuleSetup,
  createModuleHook
} from '@/modules/utils/module-factory';

export type Module = Record<'setup', ReturnType<typeof createModuleSetup>> &
  Record<string, ReturnType<typeof createModuleHook>>;
