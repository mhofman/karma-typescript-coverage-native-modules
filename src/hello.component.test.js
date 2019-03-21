import { expect, describe, it } from "../tests/setup.js";

import { HelloComponent } from "./hello.component.js";

class MockHelloService {
    sayHello() {
        return "Hello world!";
    }
}

describe("HelloComponent", () => {
    it("should say 'Hello world!'", () => {
        let mockHelloService = new MockHelloService();
        let helloComponent = new HelloComponent(mockHelloService);

        expect(helloComponent.sayHello()).to.equal("Hello world!");
    });
});
