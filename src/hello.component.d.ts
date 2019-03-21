import { HelloService } from "./hello-service.interface.js";
export declare class HelloComponent {
    private helloService;
    constructor(helloService: HelloService);
    sayHello(): string;
}
