declare global {
    interface Window {
        Page: {
            forceResize(): any;
        };
    }
}
export default function use(View: any): any;
