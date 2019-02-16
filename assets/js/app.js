new Vue({
    el: '#pvp',
    data: {
        iva: 1.045,
        pvl: null,
        margen: null
    },
    computed: {
        pvp_calc: function() {
            if (this.pvl && this.margen) {
                return ((this.pvl * this.iva) / ((100 - this.margen) / 100)).toFixed(2);
            } else {
                return '-';
            }
        },
        pvp: function () {
            return this.pvp_calc !== '-' ?  this.pvp_calc + '€' : this.pvp_calc;
        },
        ganancia: function () {
            if (this.pvp_calc !== '-') {
                return (this.pvp_calc - (this.pvl * this.iva)).toFixed(2) + '€';
            } else {
                return '-';
            }
        }
    }
});

new Vue({
    el: '#margen',
    data: {
        iva: 1.045,
        pvl: null,
        dto: null,
        pvp: null
    },
    computed: {
        pvl_final_calc: function() {
            if (this.pvl && this.dto) {
                return (this.pvl - (this.pvl * (this.dto / 100))).toFixed(2);
            } else {
                return '-';
            }
        },
        pvl_final: function() {
            return this.pvl_final_calc === '-' ? this.pvl_final_calc : this.pvl_final_calc + '€';
        },
        margen: function () {
            if (this.pvl_final_calc !== '-' && this.pvp) {
                return ((1  - ((this.pvl_final_calc * this.iva) / this.pvp)) * 100).toFixed(2) + '%';
            } else {
                return '-';
            }
        },
        ganancia: function () {
            if (this.pvp && this.pvl_final_calc) {
                return (this.pvp - (this.pvl_final_calc * this.iva)).toFixed(2) + '€';
            } else {
                return '-';
            }
        }
    }
});

new Vue({
    el: '#bonus',
    data: {
        uds: null,
        uds_bonus: null
    },
    computed: {
        uds_total: function() {
            if (this.uds && this.uds_bonus) {
                return parseInt(this.uds) + parseInt(this.uds_bonus);
            } else {
                return '-';
            }
        },
        dto: function () {
            if (this.uds_total !== '-') {
                return ((this.uds_bonus / this.uds_total) * 100).toFixed(2) + '%';
            } else {
                return '-';
            }
        }
    }
});