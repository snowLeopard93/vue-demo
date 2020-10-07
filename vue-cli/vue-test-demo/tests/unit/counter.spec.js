import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
    it("renders counter html", () => {
        const wrapper = mount(Counter);
        expect(wrapper.html()).toMatchSnapshot();
    })
    // it("renders props.msg when passed", () => {
    //     const msg = "new message";
    //     const wrapper = mount(Counter, {
    //         propsData: { msg }
    //     });
    //     expect(wrapper.text()).toMatch(msg);
    // });
});