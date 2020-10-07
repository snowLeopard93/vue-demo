import YesNoComponent from '@/components/YesNoComponent.vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import referee from '@sinonjs/referee'


describe('Click event', () => {
    it('Click on yes button calls our method with argument "yes"', () => {
        const spy = sinon.spy();
        const assert = referee.assert;
        const wrapper = mount(YesNoComponent, {
            propsData: {
                callMe: spy
            }
        });
        wrapper.find('button.yes').trigger('click');

        // spy.should.have.been.calledWith('yes')
        assert(spy.calledWith('yes'));
    })
})