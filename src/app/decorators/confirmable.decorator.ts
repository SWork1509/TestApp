import Swal, { SweetAlertOptions } from "sweetalert2";

export function confirmable(options?: any) {

    return (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
        // consoleFn(target);
        // consoleFn(propertyKey);
        // consoleFn(descriptor.value);

        // we first cache the original method implementation
        const originalMethod = descriptor.value;

        // Default configuration for SweetAlert
        const config: any = {
            title: "Are you Sure?",
            html: "Do you want to perform the action",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
            icon: "question"
        };

        // overwrite any keys passed in to our decorator in the config object
        if (options) {
            Object.keys(options).forEach(x => config[x] = options[x]);
        }

        descriptor.value = async function (...args: any[]) {

            // fire sweetalert with the config object
            const res = await Swal.fire(config);

            // Yes Case
            if (res.isConfirmed) {
                // we run the original method with the original arguments
                const result = originalMethod.apply(this, args);
                // returning the result
                return result;
            }
        };

        return descriptor;
    }

}

function consoleFn(val: any) {
    console.log(val);
}

