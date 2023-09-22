export class ChangeColors {

    constructor() {
        this.tagSection = document.getElementsByTagName('section');
        this.myImg = document.querySelector('#img-perfil');
        this.titleName = document.querySelector('#title_my_name');
        this.iconTitleAbout = document.querySelector("#yellow_ball");
        this.titleAbout = document.querySelector('#title_about');
        this.textAbout = document.querySelector('.container-bout-text');
        this.btnCv = document.querySelector('.btn-cv');
    }

    animateTheTransition() {
        const time = '1.5s';
        document.body.style.transition = `background-color ${time} ease, color ${time} ease`;
        for (const section of this.tagSection) {
            section.style.transition = `background-color ${time} ease, color ${time} ease`;
        }
    }

    changeBackgroundColor(colorJson) {
        document.body.style.backgroundColor = colorJson;
    }

    changeSectionColor(background, border) {
        //const TAG_SECTION = this.tagSection;
        for (let i = 0; i < this.tagSection.length; i++) {
            this.tagSection[i].style.backgroundColor = background;
            this.tagSection[i].style.borderColor = border;
        }
    }

    changeFillColor(colorJson) {
        this.myImg.style.borderColor = colorJson;
        this.iconTitleAbout.style.backgroundColor = colorJson;
    }

    changeFontColor(colorJson) {
        this.titleName.style.color = colorJson;
        this.titleAbout.style.color = colorJson;
        this.textAbout.style.color = colorJson;
    }

    changeBtnCv(theme, color) {
        this.btnCv.style.borderColor = color.BTN[theme].fillColorArthur;
        this.btnCv.style.color = color.BTN[theme].leaveBtnTextColor;
        this.btnCv.style.backgroundColor = color.BTN[theme].leaveBtnBackgroundColor;

        this.btnCv.addEventListener('mouseenter', () => {
            this.btnCv.style.borderColor = color.BTN[theme].fillColorArthur;
            this.btnCv.style.color = color.BTN[theme].enterBtnTextColor;
            this.btnCv.style.backgroundColor = color.BTN[theme].enterBtnBackgroundColor;
        });

        this.btnCv.addEventListener('mouseleave', () => {
            this.btnCv.style.borderColor = color.BTN[theme].fillColorArthur;
            this.btnCv.style.color = color.BTN[theme].leaveBtnTextColor;
            this.btnCv.style.backgroundColor = color.BTN[theme].leaveBtnBackgroundColor;
        });
    }
}