// Se le solicita al usuario que ingrese el nombre de una de las empresas incluidas en el menu desplegable (aun no estan el 100%) y una fecha.

let empresas = prompt("Seleccione una empresa");
let meses = prompt("Seleccione la fecha");

// se crea una variable vacia, en el que posteriormente se le asignara el valor de las ventas de una determinada empresa, en una fecha en concreto.
var busqueda;
var empresa_bd;

// A traves de este switch se establecera las condiciones a ejecutar dependiendo del nombre de la empresa que el usuario haya indicado anteriormente, en el que, iterando en los arrays, que estan en el otro archivo .js, y ubicandose en la fecha tambien indicada por el usuario, hasta hallar el datos de las ventas de esa empresa en concreto. 
// A su vez, se crearon 2 funciones para que me determine la variacion trimestral y anual de las ventas.
    switch(empresas){
        case "Apple": empresa_bd = aapl

            busqueda = empresa_bd.find((i) => i.mes === meses);
            // busqueda = aapl.find((i) => i.mes === meses);

            function variacionAnual(){
                return parseFloat(((busqueda.revenue - empresa_bd[empresa_bd.findIndex(i => i.mes === meses)-4].revenue)/(empresa_bd[empresa_bd.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionTrimestral(){
                return parseFloat(((busqueda.revenue - empresa_bd[empresa_bd.findIndex(i => i.mes === meses)-1].revenue)/(empresa_bd[empresa_bd.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }

            // function variacionAAPL_A(){
            //     return parseFloat(((busqueda.revenue - aapl[aapl.findIndex(i => i.mes === meses)-4].revenue)/(aapl[aapl.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            // }
            // function variacionAAPL_T(){
            //     return parseFloat(((busqueda.revenue - aapl[aapl.findIndex(i => i.mes === meses)-1].revenue)/(aapl[aapl.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            // }
            // document.write(" <br> La variación trimestral fue del "+ variacionAAPL_T() +"%");
            // document.write(" <br> La variación anual fue del "+ variacionAAPL_A() +"%");

            document.write(" <br> La variación trimestral fue del "+ variacionTrimestral() +"%");
            document.write(" <br> La variación anual fue del "+ variacionAnual() +"%");

            break;
        case "Ambev":
            busqueda = abev.find((i) => i.mes === meses);

            function variacionABEV_A(){
                return parseFloat(((busqueda.revenue - abev[abev.findIndex(i => i.mes === meses)-4].revenue)/(abev[abev.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionABEV_T(){
                return parseFloat(((busqueda.revenue - abev[abev.findIndex(i => i.mes === meses)-1].revenue)/(abev[abev.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionABEV_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionABEV_A() +"%");

            break;
        case "Abbott Laboratories":
            busqueda = abt.find((i) => i.mes === meses);
            
            function variacionABT_A(){
                return parseFloat(((busqueda.revenue - abt[abt.findIndex(i => i.mes === meses)-4].revenue)/(abt[abt.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionABT_T(){
                return parseFloat(((busqueda.revenue - abt[abt.findIndex(i => i.mes === meses)-1].revenue)/(abt[abt.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionABT_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionABT_A() +"%");

            break;
        case "Adobe":
            busqueda = adbe.find((i) => i.mes === meses);
            
            function variacionADBE_A(){
                return parseFloat(((busqueda.revenue - adbe[adbe.findIndex(i => i.mes === meses)-4].revenue)/(adbe[adbe.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionADBE_T(){
                return parseFloat(((busqueda.revenue - adbe[adbe.findIndex(i => i.mes === meses)-1].revenue)/(adbe[adbe.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionADBE_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionADBE_A() +"%");

            break; 
        case "Adecoagro":
            busqueda = agro.find((i) => i.mes === meses);
            
            function variacionAGRO_A(){
                return parseFloat(((busqueda.revenue - agro[agro.findIndex(i => i.mes === meses)-4].revenue)/(agro[agro.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionAGRO_T(){
                return parseFloat(((busqueda.revenue - agro[agro.findIndex(i => i.mes === meses)-1].revenue)/(agro[agro.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionAGRO_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionAGRO_A() +"%");

            break;
        case "American International Group":
            busqueda = aig.find((i) => i.mes === meses);
            
            function variacionAIG_A(){
                return parseFloat(((busqueda.revenue - aig[aig.findIndex(i => i.mes === meses)-4].revenue)/(aig[aig.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionAIG_T(){
                return parseFloat(((busqueda.revenue - aig[aig.findIndex(i => i.mes === meses)-1].revenue)/(aig[aig.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionAIG_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionAIG_A() +"%");

            break; 
        case "Advanced Micro Devices":
            busqueda = amd.find((i) => i.mes === meses);
            
            function variacionAMD_A(){
                return parseFloat(((busqueda.revenue - amd[amd.findIndex(i => i.mes === meses)-4].revenue)/(amd[amd.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionAMD_T(){
                return parseFloat(((busqueda.revenue - amd[amd.findIndex(i => i.mes === meses)-1].revenue)/(amd[amd.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionAMD_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionAMD_A() +"%");

            break;
        case "Amgen":
            busqueda = amgn.find((i) => i.mes === meses);
            
            function variacionAMGN_A(){
                return parseFloat(((busqueda.revenue - amgn[amgn.findIndex(i => i.mes === meses)-4].revenue)/(amgn[amgn.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionAMGN_T(){
                return parseFloat(((busqueda.revenue - amgn[amgn.findIndex(i => i.mes === meses)-1].revenue)/(amgn[amgn.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionAMGN_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionAMGN_A() +"%");

            break; 
        case "America Movil":
            busqueda = amx.find((i) => i.mes === meses);
            
            function variacionAMX_A(){
                return parseFloat(((busqueda.revenue - amx[amx.findIndex(i => i.mes === meses)-4].revenue)/(amx[amx.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionAMX_T(){
                return parseFloat(((busqueda.revenue - amx[amx.findIndex(i => i.mes === meses)-1].revenue)/(amx[amx.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionAMX_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionAMX_A() +"%");

            break; 
        case "Amazon":
            busqueda = amzn.find((i) => i.mes === meses);
            
            function variacionAMZN_A(){
                return parseFloat(((busqueda.revenue - amzn[amzn.findIndex(i => i.mes === meses)-4].revenue)/(amzn[amzn.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionAMZN_T(){
                return parseFloat(((busqueda.revenue - amzn[amzn.findIndex(i => i.mes === meses)-1].revenue)/(amzn[amzn.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionAMZN_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionAMZN_A() +"%");

            break; 
        case "Arcos Dorados Holdings":
            busqueda = arco.find((i) => i.mes === meses);
            
            function variacionARCO_A(){
                return parseFloat(((busqueda.revenue - arco[arco.findIndex(i => i.mes === meses)-4].revenue)/(arco[arco.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionARCO_T(){
                return parseFloat(((busqueda.revenue - arco[arco.findIndex(i => i.mes === meses)-1].revenue)/(arco[arco.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionARCO_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionARCO_A() +"%");

            break; 
        case "Yamana Gold":
            busqueda = auy.find((i) => i.mes === meses);
            
            function variacionAUY_A(){
                return parseFloat(((busqueda.revenue - auy[auy.findIndex(i => i.mes === meses)-4].revenue)/(auy[auy.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionAUY_T(){
                return parseFloat(((busqueda.revenue - auy[auy.findIndex(i => i.mes === meses)-1].revenue)/(auy[auy.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionAUY_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionAUY_A() +"%");

            break;
        case "American Express Company":
            busqueda = axp.find((i) => i.mes === meses);
            
            function variacionAXP_A(){
                return parseFloat(((busqueda.revenue - axp[axp.findIndex(i => i.mes === meses)-4].revenue)/(axp[axp.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionAXP_T(){
                return parseFloat(((busqueda.revenue - axp[axp.findIndex(i => i.mes === meses)-1].revenue)/(axp[axp.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionAXP_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionAXP_A() +"%");

            break;
        case "Astrazeneca":
            busqueda = azn.find((i) => i.mes === meses);
            
            function variacionAZN_A(){
                return parseFloat(((busqueda.revenue - azn[azn.findIndex(i => i.mes === meses)-4].revenue)/(azn[azn.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionAZN_T(){
                return parseFloat(((busqueda.revenue - azn[azn.findIndex(i => i.mes === meses)-1].revenue)/(azn[azn.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionAZN_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionAZN_A() +"%");

            break;
        case "Boeing Company":
            busqueda = ba.find((i) => i.mes === meses);
            
            function variacionBA_A(){
                return parseFloat(((busqueda.revenue - ba[ba.findIndex(i => i.mes === meses)-4].revenue)/(ba[ba.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBA_T(){
                return parseFloat(((busqueda.revenue - ba[ba.findIndex(i => i.mes === meses)-1].revenue)/(ba[ba.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBA_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBA_A() +"%");

            break;
        case "Alibaba Group Holdings":
            busqueda = baba.find((i) => i.mes === meses);
            
            function variacionBABA_A(){
                return parseFloat(((busqueda.revenue - baba[baba.findIndex(i => i.mes === meses)-4].revenue)/(baba[baba.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBABA_T(){
                return parseFloat(((busqueda.revenue - baba[baba.findIndex(i => i.mes === meses)-1].revenue)/(baba[baba.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBABA_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBABA_A() +"%");

            break;
        case "Bank of America Corporation":
            busqueda = bac.find((i) => i.mes === meses);
            
            function variacionBAC_A(){
                return parseFloat(((busqueda.revenue - bac[bac.findIndex(i => i.mes === meses)-4].revenue)/(bac[bac.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBAC_T(){
                return parseFloat(((busqueda.revenue - bac[bac.findIndex(i => i.mes === meses)-1].revenue)/(bac[bac.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBAC_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBAC_A() +"%");

            break;  
        case "Banco Bradesco":
            busqueda = bbd.find((i) => i.mes === meses);
            
            function variacionBBD_A(){
                return parseFloat(((busqueda.revenue - bbd[bbd.findIndex(i => i.mes === meses)-4].revenue)/(bbd[bbd.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBBD_T(){
                return parseFloat(((busqueda.revenue - bbd[bbd.findIndex(i => i.mes === meses)-1].revenue)/(bbd[bbd.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBBD_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBBD_A() +"%");

            break;
        case "Banco Bilbao Vizcaya Argentaria":
            busqueda = bbva.find((i) => i.mes === meses);
            
            function variacionBBVA_A(){
                return parseFloat(((busqueda.revenue - bbva[bbva.findIndex(i => i.mes === meses)-4].revenue)/(bbva[bbva.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBBVA_T(){
                return parseFloat(((busqueda.revenue - bbva[bbva.findIndex(i => i.mes === meses)-1].revenue)/(bbva[bbva.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBBVA_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBBVA_A() +"%");

            break;
        case "Barclays":
            busqueda = bcs.find((i) => i.mes === meses);
            
            function variacionBCS_A(){
                return parseFloat(((busqueda.revenue - bcs[bcs.findIndex(i => i.mes === meses)-4].revenue)/(bcs[bcs.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBCS_T(){
                return parseFloat(((busqueda.revenue - bcs[bcs.findIndex(i => i.mes === meses)-1].revenue)/(bcs[bcs.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBCS_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBCS_A() +"%");

            break;
        case "Bunge Limited":
            busqueda = bg.find((i) => i.mes === meses);
            
            function variacionBG_A(){
                return parseFloat(((busqueda.revenue - bg[bg.findIndex(i => i.mes === meses)-4].revenue)/(bg[bg.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBG_T(){
                return parseFloat(((busqueda.revenue - bg[bg.findIndex(i => i.mes === meses)-1].revenue)/(bg[bg.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBG_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBG_A() +"%");

            break;
        case "Baidu":
            busqueda = bidu.find((i) => i.mes === meses);
            
            function variacionBIDU_A(){
                return parseFloat(((busqueda.revenue - bidu[bidu.findIndex(i => i.mes === meses)-4].revenue)/(bidu[bidu.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBIDU_T(){
                return parseFloat(((busqueda.revenue - bidu[bidu.findIndex(i => i.mes === meses)-1].revenue)/(bidu[bidu.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBIDU_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBIDU_A() +"%");

            break;
        case "Biogen":
            busqueda = biib.find((i) => i.mes === meses);
            
            function variacionBIIB_A(){
                return parseFloat(((busqueda.revenue - biib[biib.findIndex(i => i.mes === meses)-4].revenue)/(biib[biib.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBIIB_T(){
                return parseFloat(((busqueda.revenue - biib[biib.findIndex(i => i.mes === meses)-1].revenue)/(biib[biib.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBIIB_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBIIB_A() +"%");

            break;
        case "Bristol-Myers Squibb Company":
            busqueda = bmy.find((i) => i.mes === meses);
            
            function variacionBMY_A(){
                return parseFloat(((busqueda.revenue - bmy[bmy.findIndex(i => i.mes === meses)-4].revenue)/(bmy[bmy.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBMY_T(){
                return parseFloat(((busqueda.revenue - bmy[bmy.findIndex(i => i.mes === meses)-1].revenue)/(bmy[bmy.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBMY_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBMY_A() +"%");

            break;
        case "BP":
            busqueda = bp.find((i) => i.mes === meses);
            
            function variacionBP_A(){
                return parseFloat(((busqueda.revenue - bp[bp.findIndex(i => i.mes === meses)-4].revenue)/(bp[bp.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBP_T(){
                return parseFloat(((busqueda.revenue - bp[bp.findIndex(i => i.mes === meses)-1].revenue)/(bp[bp.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBP_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBP_A() +"%");

            break;
        case "BRF":
            busqueda = brfs.find((i) => i.mes === meses);
            
            function variacionBRFS_A(){
                return parseFloat(((busqueda.revenue - brfs[brfs.findIndex(i => i.mes === meses)-4].revenue)/(brfs[brfs.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBRFS_T(){
                return parseFloat(((busqueda.revenue - brfs[brfs.findIndex(i => i.mes === meses)-1].revenue)/(brfs[brfs.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBRFS_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBRFS_A() +"%");

            break;
        case "Banco Santander Brasil":
            busqueda = bsbr.find((i) => i.mes === meses);
            
            function variacionBSBR_A(){
                return parseFloat(((busqueda.revenue - bsbr[bsbr.findIndex(i => i.mes === meses)-4].revenue)/(bsbr[bsbr.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionBSBR_T(){
                return parseFloat(((busqueda.revenue - bsbr[bsbr.findIndex(i => i.mes === meses)-1].revenue)/(bsbr[bsbr.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionBSBR_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionBSBR_A() +"%");

            break;
        case "Citigroup":
            busqueda = c.find((i) => i.mes === meses);
            
            function variacionC_A(){
                return parseFloat(((busqueda.revenue - c[c.findIndex(i => i.mes === meses)-4].revenue)/(c[c.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionC_T(){
                return parseFloat(((busqueda.revenue - c[c.findIndex(i => i.mes === meses)-1].revenue)/(c[c.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionC_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionC_A() +"%");

            break;
        case "Caterpillar":
            busqueda = cat.find((i) => i.mes === meses);
            
            function variacionCAT_A(){
                return parseFloat(((busqueda.revenue - cat[cat.findIndex(i => i.mes === meses)-4].revenue)/(cat[cat.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionCAT_T(){
                return parseFloat(((busqueda.revenue - cat[cat.findIndex(i => i.mes === meses)-1].revenue)/(cat[cat.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionCAT_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionCAT_A() +"%");

            break;
        case "Salesforce":
            busqueda = crm.find((i) => i.mes === meses);
            
            function variacionCRM_A(){
                return parseFloat(((busqueda.revenue - crm[crm.findIndex(i => i.mes === meses)-4].revenue)/(crm[crm.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionCRM_T(){
                return parseFloat(((busqueda.revenue - crm[crm.findIndex(i => i.mes === meses)-1].revenue)/(crm[crm.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionCRM_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionCRM_A() +"%");

            break;
        case "Credit Suisse Group":
            busqueda = cs.find((i) => i.mes === meses);
            
            function variacionCS_A(){
                return parseFloat(((busqueda.revenue - cs[cs.findIndex(i => i.mes === meses)-4].revenue)/(cs[cs.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionCS_T(){
                return parseFloat(((busqueda.revenue - cs[cs.findIndex(i => i.mes === meses)-1].revenue)/(cs[cs.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionCS_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionCS_A() +"%");

            break;
        case "Cisco Systems":
            busqueda = csco.find((i) => i.mes === meses);
            
            function variacionCSCO_A(){
                return parseFloat(((busqueda.revenue - csco[csco.findIndex(i => i.mes === meses)-4].revenue)/(csco[csco.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionCSCO_T(){
                return parseFloat(((busqueda.revenue - csco[csco.findIndex(i => i.mes === meses)-1].revenue)/(csco[csco.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionCSCO_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionCSCO_A() +"%");

            break;
        case "Chevron Corporation":
            busqueda = cvx.find((i) => i.mes === meses);
            
            function variacionCVX_A(){
                return parseFloat(((busqueda.revenue - cvx[cvx.findIndex(i => i.mes === meses)-4].revenue)/(cvx[cvx.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionCVX_T(){
                return parseFloat(((busqueda.revenue - cvx[cvx.findIndex(i => i.mes === meses)-1].revenue)/(cvx[cvx.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionCVX_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionCVX_A() +"%");

            break;
        case "Cemex":
            busqueda = cx.find((i) => i.mes === meses);
            
            function variacionCX_A(){
                return parseFloat(((busqueda.revenue - cx[cx.findIndex(i => i.mes === meses)-4].revenue)/(cx[cx.findIndex(i => i.mes === meses)-4].revenue))*100).toFixed(2);
            }
            function variacionCX_T(){
                return parseFloat(((busqueda.revenue - cx[cx.findIndex(i => i.mes === meses)-1].revenue)/(cx[cx.findIndex(i => i.mes === meses)-1].revenue))*100).toFixed(2);
            }
            document.write(" <br> La variación trimestral fue del "+ variacionCX_T() +"%");
            document.write(" <br> La variación anual fue del "+ variacionCX_A() +"%");

            break;
        default:
            break;
    }

// Habiendo encontrado el valor de las ventas de la empresa, en un mes concreto, se procede a indicarlo en el HTML a traves de un "document.write".
document.write("<br> Las ventas de "+ empresas +" fueron de USD "+ busqueda.revenue +" millones, en el mes de "+ meses);

document.write("<table border='1'><tbody><tr><td></td><th> Ventas</th></tr><tr><th>"+ busqueda.mes +"</th><td>"+ busqueda.revenue +"</td></tr></tbody></table>")
