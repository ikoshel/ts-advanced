function Catch(_target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
        try {
            return originalMethod.apply(this, arguments);
        } catch (error) {
            console.log(`Oops, there is an error in ${methodName}: ${error.message}`);
        }
    };

    return descriptor;
}

class UsersService {
    @Catch
    getUsers() {
        throw new Error("No users");
    }
}

const userService = new UsersService();
userService.getUsers();
