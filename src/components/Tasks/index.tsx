import { Section } from "../../components/Section";
import { FlatList, Text, View, Modal, Alert } from "react-native";
import { Task } from "../../components/Task";
import { ButtonAdd } from "../ButtonAdd";
import { EmptyList } from "../EmptyList";
import { TaskProps } from "../../utils/types";
import { useContext, useState } from "react";
import {TaskContext} from "../../context/TaskContext";
import { ModalCreateTask } from "../ModalCreateTask";

export function Tasks() {
    const [modalCreateTask, setModalCreateTask] = useState(false);
    const { tasks } = useContext(TaskContext);
    function handleModalCreateTask() {
        setModalCreateTask(!modalCreateTask);
    }

    return (
        <Section title="Tasks">
            <FlatList
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Task title={item.title} />
                )}
                ItemSeparatorComponent={() => <View style={{ paddingVertical: 7 }} />}
                ListEmptyComponent={
                    <EmptyList message="Nenhuma tarefa encontrada" />
                }
            />
            <ModalCreateTask modalVisible={modalCreateTask} handleModalCreateTask={handleModalCreateTask} />
            <ButtonAdd handleModalCreateTask={handleModalCreateTask} />
        </Section>
    );
}