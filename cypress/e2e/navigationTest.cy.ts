import navigationPage from '../page-object/navigationPage'

describe('Test navigation menu', () => {

    const LayoutMenu = 'Layout';
    const FormMenu = 'Form';
    const ModalOverlaysMenu = 'Modal & Overlays';
    const ExtraComponentsMenu = 'Extra Components';

    beforeEach('visit main page', () => {
        cy.visit('/')
    })

    it('should open layout stepper page', () => {
        navigationPage.selectMenuItem(LayoutMenu)
        navigationPage.selectSubMenuItem('Stepper')
        navigationPage.validateCurrentUrl('/layout/stepper')
    })

    it('should open layout accordion page', () => {
        navigationPage.selectMenuItem(LayoutMenu)
        navigationPage.selectSubMenuItem('Accordion')
        navigationPage.validateCurrentUrl('/layout/accordion')
    })

    it('should open forms layout page', () => {
        navigationPage.selectMenuItem(FormMenu)
        navigationPage.selectSubMenuItem('Form Layout')
        navigationPage.validateCurrentUrl('/forms/layouts')
    })

    it('should open forms datepicker page', () => {
        navigationPage.selectMenuItem(FormMenu)
        navigationPage.selectSubMenuItem('Datepicker')
        navigationPage.validateCurrentUrl('/forms/datepicker')
    })

    it('should open dialog page', () => {
        navigationPage.selectMenuItem(ModalOverlaysMenu)
        navigationPage.selectSubMenuItem('Dialog')
        navigationPage.validateCurrentUrl('pages/modal-overlays/dialog')
    })

    it('should open window page', () => {
        navigationPage.selectMenuItem(ModalOverlaysMenu)
        navigationPage.selectSubMenuItem('Window')
        navigationPage.validateCurrentUrl('pages/modal-overlays/window')
    })

    it('should open popover page', () => {
        navigationPage.selectMenuItem(ModalOverlaysMenu)
        navigationPage.selectSubMenuItem('Popover')
        navigationPage.validateCurrentUrl('pages/modal-overlays/popover')
    })

    it('should open toastr page', () => {
        navigationPage.selectMenuItem(ModalOverlaysMenu)
        navigationPage.selectSubMenuItem('Toastr')
        navigationPage.validateCurrentUrl('pages/modal-overlays/toastr')
    })

    it('should open tooltip page', () => {
        navigationPage.selectMenuItem(ModalOverlaysMenu)
        navigationPage.selectSubMenuItem('Tooltip')
        navigationPage.validateCurrentUrl('pages/modal-overlays/tooltip')
    })

    it('should open calendar page', () => {
        navigationPage.selectMenuItem(ExtraComponentsMenu)
        navigationPage.selectSubMenuItem('Calendar')
        navigationPage.validateCurrentUrl('extra-components/calendar')
    })

    it('should open smart table page', () => {
        navigationPage.selectMenuItem('Tables & Data')
        navigationPage.selectSubMenuItem('Smart Table')
        navigationPage.validateCurrentUrl('tables/smart-table')
    })

    it('should open tree grid page', () => {
        navigationPage.selectMenuItem('Tables & Data')
        navigationPage.selectSubMenuItem('Tree Grid')
        navigationPage.validateCurrentUrl('tables/tree-grid')
    })

    it('should open login page', () => {
        navigationPage.selectMenuItem('Auth')
        navigationPage.selectSubMenuItem('Login')
        navigationPage.validateCurrentUrl('auth/login')
    })

    it('should open register page', () => {
        navigationPage.selectMenuItem('Auth')
        navigationPage.selectSubMenuItem('Register')
        navigationPage.validateCurrentUrl('auth/register')
    })

    it('should open register page', () => {
        navigationPage.selectMenuItem('Auth')
        navigationPage.selectSubMenuItem('Request Password')
        navigationPage.validateCurrentUrl('auth/request-password')
    })

    it('should open register page', () => {
        navigationPage.selectMenuItem('Auth')
        navigationPage.selectSubMenuItem('Reset Password')
        navigationPage.validateCurrentUrl('auth/reset-password')
    })
})