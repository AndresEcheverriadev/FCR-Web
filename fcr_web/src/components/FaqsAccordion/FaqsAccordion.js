import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { AnalyticService } from "../../Services/AnalyticService";
import "./FaqsAccordion.css";

function faqsAccordion() {
  const sendClickCollapse = (event, category, action, label) => {
    if (event.target.classList.contains("collapsed") === false) {
      AnalyticService.event(category, action, label);
    }
  };
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header
          onClick={(e) =>
            sendClickCollapse(
              e,
              "Interacciones",
              "clic_preguntasFrecuentes",
              "faqs_muerteFamiliar"
            )
          }
        >
          ¿Que hacer cuando la muerte ocurre?
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Cuando muere una persona, lo primero es que personal médico o
            paramédico constate el fallecimiento. Luego, los pasos a seguir son:
          </p>
          <ul>
            <li>
              Obtener el certificado médico de defunción, entregado por un
              médico. El documento se solicita independientemente del lugar de
              la muerte (casa, hospital, etc.).
            </li>
            <li>
              Inscribir la defunción en una oficina del Servicio de Registro
              Civil e Identificación (SRCeI). Después puede solicitar el
              certificado, que sirve para todos los trámites relacionados con
              pensiones y regularizaciones.
            </li>
            <li>Comprar los servicios funerarios.</li>
            <li>
              Comprar una sepultura. Cuando los familiares de una persona
              fallecida no pueden pagar una, generalmente se pide una entrevista
              con el o la asistente social de la municipalidad donde vivía la
              persona fallecida, para que evalúe y pueda decretar la gratuidad
              de una sepultura.
            </li>
            <li>Cobrar la asignación por causa de muerte (cuota mortuoria).</li>
          </ul>
          <p>
            <b>
              Importante: Estos trámites son parte del servicio que entrega
              Servicios Funerarios Cristo Rey. Al momento de fallecer la
              persona, solo debe hablarnos y le acompañaremos en cada paso.
            </b>
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header
          onClick={(e) =>
            sendClickCollapse(
              e,
              "Interacciones",
              "clic_preguntasFrecuentes",
              "faqs_cuotasMortuorias"
            )
          }
        >
          Seguro social y cuotas mortuorias
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Cuando una persona muere, la asignación por causa de muerte (cuota
            mortuoria) se paga a quien haya realizado los gastos funerarios. Si
            se contrata una funeraria, es ella la que cobra, cubriendo parte de
            los servicios funerarios o su totalidad. Para los afiliados,
            afiliadas, pensionados o pensionadas de una AFP, esta cuota se
            financia con el saldo de la cuenta individual. El monto del
            beneficio es de 15 Unidades de Fomento (UF) o hasta el monto del
            saldo de la cuenta, si este fuere menor. En caso de contar con el
            servicio, las funerarias se encargan de inscribir la defunción en el
            Registro Civil, proveer de un ataúd y cobrar la cuota mortuoria. Los
            beneficiarios y beneficiarias de la Pensión Básica Solidaria de
            Vejez e Invalidez, también tienen derecho a cuota mortuoria. En caso
            de pensionados, pensionadas o imponentes del Instituto de Previsión
            Social (IPS), esta se reajusta en julio de cada año. Revise más
            información.
          </p>
          <ul>
            <li>
              Si una persona pensionada de AFP es además titular de Aporte
              Previsional Solidario y muere, la cuota mortuoria de 15 UF que
              debe la AFP está garantizada debido a que el Instituto de
              Previsión Social (IPS) aportará la diferencia que exista con los
              fondos disponibles en la cuenta.
            </li>
            <li>
              Si una persona pensionada de renta vitalicia de una compañía de
              seguros muere, siempre tendrá derecho a cobrar la cuota mortuoria
              porque es una prestación que se incorpora en el respectivo
              contrato con la compañía al momento de traspasar los fondos desde
              la AFP.
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header
          onClick={(e) =>
            sendClickCollapse(
              e,
              "Interacciones",
              "clic_preguntasFrecuentes",
              "faqs_sepulturaFallecida"
            )
          }
        >
          Si existe una sepultura a nombre de la persona fallecida
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
              Su familiar podrá ser sepultado en esa sepultura. Generalmente,
              las sepulturas compradas previamente son perpetuas y familiares.
            </li>
            <li>
              Para usar esa sepultura debe coordinar con la funeraria y
              acercarse al cementerio para que la abran, determinen si tiene
              capacidad, y evalúen si su familiar tiene derecho a usar esa
              sepultura o no.
            </li>
            <li>
              Recuerde entregar el pase de sepultación, documento que entrega el
              Registro Civil una vez hecha la inscripción de defunción.
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header
          onClick={(e) =>
            sendClickCollapse(
              e,
              "Interacciones",
              "clic_preguntasFrecuentes",
              "faqs_fallecidaNoSepultura"
            )
          }
        >
          Si la persona fallecida no tiene una sepultura
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
              Si la persona fallecida o la familia no cuenta con un lugar para
              la sepultación, deberá acercarse a un cementerio para adquirir un
              lugar para realizar el entierro. En algunos casos, las sepulturas
              o nichos se arriendan por un determinado periodo de tiempo, el que
              puede renovarse.
            </li>
            <li>
              No olvide entregar el pase de sepultación, documento que entrega
              el Registro Civil una vez hecha la inscripción de defunción
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header
          onClick={(e) =>
            sendClickCollapse(
              e,
              "Interacciones",
              "clic_preguntasFrecuentes",
              "faqs_fallecidaCremacion"
            )
          }
        >
          Si la persona fallecida pidió ser cremada
        </Accordion.Header>
        <Accordion.Body>
          <p>
            ¿Qué documentos debo presentar si la persona fallecida pidió ser
            cremada?
          </p>
          <ul>
            <li>
              Autorización previa del director general del Servicio Nacional de
              Salud o de su delegado, siempre que pase alguna de las dos
              siguientes situaciones:
              <ul>
                <li>
                  Exista declaración escrita hecha antes por la persona
                  fallecida en una notaría o en el registro que deben llevar
                  todos los cementerios para ello.
                </li>
                <li>
                  Exista solicitud del cónyuge sobreviviente o de la mayoría de
                  los hijos quienes autoricen la cremación ante notario público.
                  En caso de no existir cónyuge sobreviviente ni hijos, el
                  Reglamento de Cementerios autoriza a otras personas a
                  solicitarlo.
                </li>
              </ul>
            </li>
            <li>
              Pase de sepultación, emitido por el Registro Civil del lugar donde
              ocurrió el fallecimiento, más una fotocopia del certificado de
              defunción emitido por el médico.
            </li>
            <li>
              Autorización judicial, sólo si el fallecimiento ocurrió por
              accidente o por causas que hagan suponer algún grado de delito.
            </li>
            <p>
              Importante: los documentos deben ser presentados en el lugar dónde
              se va a realizar la incineración.
            </p>
          </ul>
          <p>¿Cuáles son los plazos para realizar la cremación?</p>
          <ul>
            <li>
              En caso de producirse muerte natural, la cremación se hace
              generalmente 1 ó 2 días después de recibido el cuerpo. Según el
              código sanitario, una vez ocurrida la muerte, deberá existir una
              fecha de muerte de a lo menos 24 horas y no deberá superar las 48
              horas antes de ser ingresado a un cementerio, ya sea para ser
              cremado o sepultado.
            </li>
          </ul>
          <p>
            ¿Que hacer en el caso de una persona extranjera sin familiares en
            Chile?
          </p>
          <ul>
            <li>
              En el caso de las personas extranjeras que no tengan parientes en
              el país, bastará la petición formulada por el representante
              diplomático o consular del país de origen de la persona fallecida
              para que pueda ser cremada.
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header
          onClick={(e) =>
            sendClickCollapse(
              e,
              "Interacciones",
              "clic_preguntasFrecuentes",
              "faqs_reembolsoGastos"
            )
          }
        >
          Reembolso de gastos funerarios
        </Accordion.Header>
        <Accordion.Body>
          <p>
            Existen muchas situaciones y alternativas para que se reembolsen los
            gastos funerarios:
          </p>
          <ul>
            <li>
              Si la persona fallecida estaba afiliada al sistema de AFP con una
              cuenta de capitalización abierta y vigente, quien acredite haberse
              hecho cargo de los gastos del funeral con la correspondiente
              factura, tiene derecho al pago de 15 Unidades de Fomento (UF) por
              parte de la AFP y cargados a la cuenta de capitalización
              individual del causante. Esto significa que, si el saldo de esa
              cuenta es menor que 15 UF al momento del fallecimiento, la Cuota
              Mortuoria solo equivaldrá al saldo remanente. Ahora bien, si la
              persona fallecida percibía PGU o beneficios del Pilar Solidario de
              Invalidez, tiene derecho a la totalidad de la Cuota Mortuoria,
              para cuyos efectos la AFP pagará su monto íntegro con fondo
              propios si fuere necesario, para luego recuperarlos directamente
              del IPS.
            </li>
            <li>
              Si la persona fallecida afiliada al sistema de AFP estaba
              pensionada en la modalidad de renta vitalicia, la compañía de
              seguros pagará 15 UF a la persona que acredite haberse hecho cargo
              de los gastos funerarios del causante, independientemente de si
              percibía o no PGU o algún beneficio del Pilar Solidario de
              Invalidez al momento de fallecer.
            </li>
            <li>
              Si la persona fallecida estaba afiliada al sistema previsional
              antiguo (ex INP), se autorizará a quien haya pagado los gastos
              funerarios el derecho a cobrar la Asignación por Muerte, la que
              será pagada directamente por el IPS, equivalente a tres ingresos
              mínimos para fines no remuneracionales. La única excepción a este
              derecho es el caso de los pensionados de orfandad en el sistema
              antiguo que fallecen sin estar percibiendo además PGU o algún
              beneficio del Pilar Solidario. Actualmente, la Asignación por
              Muerte corresponde a $773 mil 508 (equivalentes a tres ingresos
              mínimos para fines no remuneracionales vigentes a la fecha del
              fallecimiento). Obtén más información sobre la Asignación por
              Muerte y/o descarga el certificado de defunción para asignación
              familiar.
            </li>
            <li>
              Si la persona no estaba afiliada a ningún sistema previsional que
              cause beneficios mortuorios y solo percibía PGU, genera derecho de
              Cuota Mortuoria, pagada directamente por el IPS. En el mismo caso,
              si solo percibía beneficios del Pilar Solidario de Invalidez o
              subsidio de discapacidad para menores de edad, genera derecho a
              Asignación por Muerte, también pagada directamente por el IPS.
            </li>
            <li>
              Además, sobre la Cuota Mortuoria, si los gastos funerarios fueron
              hechos por una persona distinta del cónyuge o conviviente civil,
              hijos o padre del afiliado fallecido, solo tendrá derecho a tal
              retiro hasta la comprobación del monto efectivo de su gasto, con
              el límite de 15 Unidades de Fomento, quedando el saldo hasta
              completar esa cifra a disposición del o la cónyuge o conviviente
              civil sobreviviente, y a falta de este, de los hijos o los padres
              del afiliado.
            </li>
            <li>
              Por su parte, tratándose de Asignación por Muerte, tendrá derecho
              al monto máximo el beneficiario que sea cónyuge, hijo, padre o
              madre del causante. Cualquier otro beneficiario tendrá derecho
              solamente al reembolso del gasto que pruebe haber realizado hasta
              el monto máximo de la asignación.
            </li>
            <li>
              Como esos gastos corren generalmente por cuenta de la funeraria,
              es ella la que se hace cargo de cobrar ese dinero para cubrir el
              servicio fúnebre.
            </li>
            <li>
              Generalmente, las funerarias tienen servicios fúnebres básicos, de
              manera que no tengas que pagar extra a la funeraria, pues la Cuota
              Mortuoria o Asignación por Muerte cubre casi todo ese gasto.
            </li>
            <li>
              En los casos en que las mujeres reciben beneficios del Pilar
              Solidario y que, además, se afilian a una AFP para obtener el Bono
              por Hijo, solo tendrán derecho a la cuota mortuoria y no a la
              asignación por muerte. Obtén más información sobre el Bono por
              Hijo.
            </li>
            <li>
              En el caso de familiares o terceros que se hayan hecho cargo de
              los servicios funerarios de un funcionario en servicio activo, o
              pensionado de retiro o montepío de la Caja de Previsión de la
              Defensa Nacional (Capredena), pueden solicitar una Asignación por
              Muerte.
            </li>
            <li>
              También podrán solicitar una Cuota Mortuoria los familiares o
              terceros que se hayan hecho cargo de los servicios funerarios de
              un funcionario activo, o pensionados o pensionadas de retiro, o
              montepíos de la Dirección de Previsión de Carabineros de Chile
              (Dipreca).
            </li>
          </ul>
          <p>
            Importante: para información sobre costos de sepultura, renovación o
            cambios de las condiciones, consulte directamente con la
            administración del cementerio.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header
          onClick={(e) =>
            sendClickCollapse(
              e,
              "Interacciones",
              "clic_preguntasFrecuentes",
              "faqs_trasladoPersona"
            )
          }
        >
          Traslado de una persona fallecida
        </Accordion.Header>
        <Accordion.Body>
          <p>¿Quiénes están autorizados para trasladar difuntos?</p>
          <ul>
            <li>
              Los funcionarios de los cementerios. Las casas funerarias pueden
              hacerlo, siempre y cuando cuenten con la autorización del Servicio
              Nacional de Salud.
            </li>
          </ul>
          <p>Para traslado de ciudad en Chile</p>
          <ul>
            <li>
              Se debe obtener un permiso de la autoridad sanitaria y de la
              SEREMI de salud del área en que la persona falleció. Para realizar
              este trámite, el ataúd debe estar sellado.
            </li>
          </ul>
          <p>Para traslado fuera de Chile</p>
          <ul>
            <li>
              Hacia el extranjero: el ataúd debe ser colocado en un
              compartimento separado, dentro del vehículo de transporte, y debe
              ser sellado por la autoridad sanitaria.
            </li>
            <li>
              Desde el extranjero: solo podrá ingresar si previamente se
              acredita ante la autoridad sanitaria, por medio de documentos
              extendidos por las autoridades sanitarias del punto de origen,
              debidamente visados por el cónsul de Chile, que el transporte no
              representa un peligro para la salud pública.
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default faqsAccordion;
