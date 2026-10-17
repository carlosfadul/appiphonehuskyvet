import type { CapacitorConfig } from '@capacitor/cli';
const localTest = process.env.HUSKYSOFT_ANDROID_LOCAL === '1';
const config: CapacitorConfig = { appId: 'co.huskysoft.mascotas', appName: 'Huskyvet', webDir: 'dist', android: { adjustMarginsForEdgeToEdge: 'force', ...(localTest ? { allowMixedContent: true } : {}) } };
export default config;
